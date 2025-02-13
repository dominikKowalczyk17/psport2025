// components/FeaturedArticle.vue
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { newsService } from "@/mocks/services/newsService";
import type { News } from "@/types/News";
import { formatDateForDisplay } from "@/utils/dateFormatters";

const featuredArticle = ref<News | null>(null);

onMounted(async () => {
  try {
    const articles = await newsService.getNews();
    featuredArticle.value = articles.find((article) => article.isFeatured) || null;
  } catch (error) {
    console.error("Error fetching featured article:", error);
  }
});
</script>

<template>
  <div
    v-if="featuredArticle"
    class="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
  >
    <router-link :to="{ name: 'news', params: { slug: featuredArticle.slug } }">
      <div class="md:grid md:grid-cols-2 md:h-[400px]">
        <!-- Image Section -->
        <div class="relative h-48 md:h-full overflow-hidden">
          <img
            :src="featuredArticle.imageUrl"
            :alt="featuredArticle.title"
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"
          ></div>
        </div>

        <!-- Content Section -->
        <div class="p-6 md:p-8 flex flex-col justify-between relative">
          <!-- Hot Badge -->
          <div
            v-if="featuredArticle.isHot"
            class="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider"
          >
            Hot
          </div>

          <div>
            <!-- Category & Date -->
            <div class="flex items-center space-x-4 mb-4">
              <span class="text-blue-600 font-bold text-sm">
                {{ featuredArticle.category.title }}
              </span>
              <span class="text-gray-500 text-sm">
                {{ formatDateForDisplay(featuredArticle.publishDate) }}
              </span>
            </div>

            <!-- Title -->
            <div
              class="block text-2xl md:text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-4 line-clamp-3"
            >
              {{ featuredArticle.title }}
            </div>

            <!-- Excerpt -->
            <p class="text-gray-600 line-clamp-3 mb-6">
              {{ featuredArticle.excerpt }}
            </p>
          </div>

          <!-- Author Section -->
          <div class="flex items-center space-x-4">
            <img
              v-if="featuredArticle.author.avatar"
              :src="featuredArticle.author.avatar"
              :alt="featuredArticle.author.name"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span class="block text-sm font-medium text-gray-900">
                {{ featuredArticle.author.name }}
              </span>
              <span class="block text-sm text-gray-500">
                {{ featuredArticle.author.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
