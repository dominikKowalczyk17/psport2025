<script setup lang="ts">
import {
  ref,
  onMounted,
  onUnmounted,
  computed,
  watch,
  inject,
  type Ref,
} from "vue";
import { useRoute } from "vue-router";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";
import ArticleHero from "@/components/article/ArticleHero.vue";
import RelatedArticles from "@/components/article/RelatedArticles.vue";
import ArticleGallery from "@/components/article/ArticleGallery.vue";
import LoadingSpinner from "@/components/shared/LoadingSpinner.vue";
import ArticleQuote from "@/components/article/ArticleQuote.vue";

const route = useRoute();
const newsSlug = route.params.slug as string;

const article = ref<News | null>(null);
const relatedArticles = ref<News[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

const articleTitle = inject("articleTitle") as Ref<string | undefined>;
const readingProgress = inject("readingProgress") as Ref<number>;

// Obliczanie sekcji z contentu
const sections = computed(() => {
  if (!article.value) return [];
  const contentParagraphs = article.value.content.split("\n\n");
  return contentParagraphs.map((paragraph, index) => ({
    id: `section-${index}`,
    title: index === 0 ? "Introduction" : `Section ${index}`,
    content: paragraph,
  }));
});

// Ładowanie artykułu
onMounted(async () => {
  try {
    loading.value = true;
    const articleData = await newsService.getNewsBySlug(newsSlug);

    if (!articleData) {
      throw new Error("Article not found");
    }

    article.value = articleData;

    // Pobierz powiązane artykuły
    const allNews = await newsService.getNews();
    relatedArticles.value = allNews
      .filter(
        (news) =>
          news.category.id === articleData.category.id && news.slug !== newsSlug
      )
      .slice(0, 3);
  } catch (e) {
    error.value = (e as Error).message;
    console.error("Error loading article:", e);
  } finally {
    loading.value = false;
  }

  window.addEventListener("scroll", handleScroll);
});

// Obsługa tytułu artykułu
watch(
  () => article.value,
  (newArticle) => {
    if (newArticle) {
      articleTitle.value = newArticle.title;
    } else {
      articleTitle.value = undefined;
    }
  },
  { immediate: true }
);

// Czyszczenie
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  articleTitle.value = undefined;
});

// Aktualizacja postępu czytania
const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollPosition = window.scrollY;
  readingProgress.value =
    (scrollPosition / (documentHeight - windowHeight)) * 100;
};

const shareMenuOpen = ref(false);
const toggleShareMenu = () => {
  shareMenuOpen.value = !shareMenuOpen.value;
};
</script>

<template>
  <div v-if="loading" class="flex justify-center items-center min-h-screen">
    <LoadingSpinner />
  </div>

  <div v-else-if="error" class="flex justify-center items-center min-h-screen">
    <div class="text-xl text-red-600">{{ error }}</div>
  </div>

  <article v-else-if="article" class="relative">
    <ArticleHero :article="article" />

    <div class="max-w-4xl mx-auto px-4">
      <!-- Table of Contents -->
      <nav class="mb-8 p-4 bg-gray-100 rounded-lg">
        <h3 class="text-lg font-bold mb-2">W tym artykule</h3>
        <ul class="space-y-1">
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`" class="text-blue-600 hover:underline">
              {{ section.title }}
            </a>
          </li>
          <li>
            <a href="#related-articles" class="text-blue-600 hover:underline">
              Zobacz także
            </a>
          </li>
        </ul>
      </nav>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none mb-12">
        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {{ tag }}
          </span>
        </div>

        <div
          v-for="section in sections"
          :key="section.id"
          :id="section.id"
          class="mb-8"
        >
          <h2 class="text-2xl font-bold mb-4">{{ section.title }}</h2>
          <p>{{ section.content }}</p>
        </div>
      </div>

      <!-- Featured Image -->
      <div v-if="article.imageUrl" class="mb-12">
        <img
          :src="article.imageUrl"
          :alt="article.title"
          class="w-full h-auto rounded-lg shadow-lg"
        />
        <p class="text-sm text-gray-600 mt-2">"{{ article.title }}"</p>
      </div>

      <!-- Gallery Section -->
      <ArticleGallery
        v-if="article.gallery && article.gallery.length > 0"
        :images="article.gallery"
      />

      <!-- Quotes -->
      <div v-if="article.quotes && article.quotes.length > 0" class="mb-12">
        <ArticleQuote
          v-for="(quote, index) in article.quotes"
          :key="index"
          v-bind="quote"
        />
      </div>

      <!-- Related Articles -->
      <RelatedArticles id="related-articles" :articles="relatedArticles" />
    </div>

    <!-- Floating Share Button -->
    <button
      @click="toggleShareMenu"
      class="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    </button>
  </article>
</template>
