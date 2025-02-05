<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Category } from "@/types/Category";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";
import { formatDateForDateTime, formatDateForDisplay } from "@/utils/dateFormatters";

interface Props {
  category: Category;
}

const props = defineProps<Props>();

// Component state
const isSubmenuExpanded = ref(false);
const categoryNews = ref<News[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// Load news data based on category
onMounted(async () => {
  try {
    loading.value = true;

    // We'll treat video category (id: 1) differently
    if (props.category.id === 1) {
      // Here you could add specific video handling if needed
      categoryNews.value = await newsService.getNewsByCategory(props.category.id);
    } else {
      // For regular news categories
      const news = await newsService.getNewsByCategory(props.category.id);

      // If the category has featured news, prioritize them
      const featured = await newsService.getFeaturedNews(props.category.id);

      // Combine featured and regular news, removing duplicates
      const allNews = [
        ...featured,
        ...news.filter((n) => !featured.find((f) => f.id === n.id)),
      ];
      categoryNews.value = allNews;
    }
  } catch (e) {
    error.value = (e as Error).message;
    console.error(`Error loading news for category ${props.category.title}:`, e);
  } finally {
    loading.value = false;
  }
});

// Computed properties
const items = computed(() => {
  return categoryNews.value;
});

const isLoading = computed(() => loading.value);

// Date formatting helpers
const formatDate = (date: Date) => {
  return formatDateForDisplay(date);
};
</script>

<template>
  <section class="section">
    <!-- Section header -->
    <header class="section__header section__header--bg">
      <div class="section__header-content">
        <h2 class="section__title">
          <a :href="category.href" class="section__title-link">
            {{ category.title }}
          </a>
        </h2>

        <!-- Submenu toggle button for categories with submenu -->
        <button
          v-if="category.submenu?.length"
          class="section__submenu-toggle"
          :class="{ 'is-expanded': isSubmenuExpanded }"
          @click="isSubmenuExpanded = !isSubmenuExpanded"
        >
          <span class="sr-only">
            {{ isSubmenuExpanded ? "Zwiń" : "Rozwiń" }} podmenu
          </span>
        </button>
      </div>

      <!-- Submenu for categories that have it -->
      <nav
        v-if="category.submenu?.length"
        class="section__submenu"
        :class="{ 'is-expanded': isSubmenuExpanded }"
      >
        <ul class="section__submenu-list">
          <li v-for="item in category.submenu" :key="item.href">
            <a :href="item.href" class="section__submenu-link">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Section content -->
    <div class="news-list news-list--default">
      <!-- Loading state -->
      <div v-if="isLoading" class="loading">
        <span class="loading__text">Ładowanie...</span>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="error">
        {{ error }}
      </div>

      <!-- News list -->
      <template v-else>
        <article
          v-for="item in items"
          :key="item.id"
          class="news"
          :class="{
            'news--video': category.id === 1,
            'news--featured': item.isFeatured,
            'news--hot': item.isHot,
          }"
        >
          <span class="news__link">
            <a class="news__link-over" :href="item.url">
              <span class="sr-only">{{ item.title }}</span>
            </a>

            <figure class="news__figure">
              <img
                class="news__img"
                :src="item.thumbnailUrl"
                :alt="item.title"
                loading="lazy"
              />
              <!-- Hot news indicator -->
              <span v-if="item.isHot" class="news__hot-badge">HOT</span>
            </figure>

            <header class="news__header">
              <div class="news__info">
                <time
                  class="news__time"
                  :datetime="formatDateForDateTime(item.publishDate)"
                >
                  {{ formatDate(item.publishDate) }}
                </time>
                <a class="news__category" :href="category.href">
                  {{ category.title }}
                </a>
                <!-- Display author name -->
                <span class="news__author">{{ item.author.name }}</span>
              </div>
              <h2 class="news__title">{{ item.title }}</h2>
              <!-- Added excerpt for featured news -->
              <p v-if="item.isFeatured" class="news__excerpt">
                {{ item.excerpt }}
              </p>
            </header>
          </span>
        </article>
      </template>
    </div>
  </section>
</template>
