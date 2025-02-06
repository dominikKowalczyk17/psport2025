<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";
import ArticleHeader from "@/components/article/ArticleHeader.vue";
import ArticleHero from "@/components/article/ArticleHero.vue";
import RelatedArticles from "@/components/article/RelatedArticles.vue";
import ShareMenu from "@/components/article/ShareMenu.vue";

const route = useRoute();
const newsSlug = route.params.slug as string;

const article = ref<News | null>(null);
const relatedArticles = ref<News[]>([]);
const scrolled = ref(false);
const readingProgress = ref(0);
const shareMenuOpen = ref(false);
const loading = ref(true);
const error = ref<string | null>(null);

const sections = computed(() => {
  if (!article.value) return [];
  const contentParagraphs = article.value.content.split("\n\n");
  return contentParagraphs.map((paragraph, index) => ({
    id: `section-${index}`,
    title: index === 0 ? "Introduction" : `Section ${index}`,
    content: paragraph,
  }));
});

onMounted(async () => {
  try {
    loading.value = true;
    const articleData = await newsService.getNewsBySlug(newsSlug);

    if (!articleData) {
      throw new Error("Article not found");
    }

    article.value = articleData;

    // Get related articles from the same category
    const allNews = await newsService.getNews();
    relatedArticles.value = allNews
      .filter(
        (news) => news.category.id === articleData.category.id && news.slug !== newsSlug
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

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  scrolled.value = scrollPosition > 50;

  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  readingProgress.value = (scrollPosition / (documentHeight - windowHeight)) * 100;
};

const toggleShareMenu = () => {
  shareMenuOpen.value = !shareMenuOpen.value;
};
</script>

<template>
  <div v-if="loading" class="flex justify-center items-center min-h-screen">
    <div class="text-xl">Loading...</div>
  </div>

  <div v-else-if="error" class="flex justify-center items-center min-h-screen">
    <div class="text-xl text-red-600">{{ error }}</div>
  </div>

  <article v-else-if="article" class="relative">
    <ArticleHeader
      :title="article.title"
      :scrolled="scrolled"
      @scroll-to-top="scrollToTop"
    />

    <ArticleHero :article="article" />

    <div class="max-w-4xl mx-auto px-4">
      <!-- Table of Contents -->
      <nav class="mb-8 p-4 bg-gray-100 rounded-lg">
        <h3 class="text-lg font-bold mb-2">Table of Contents</h3>
        <ul class="space-y-1">
          <li v-for="section in sections" :key="section.id">
            <a :href="`#${section.id}`" class="text-blue-600 hover:underline">{{
              section.title
            }}</a>
          </li>
          <li>
            <a href="#related-articles" class="text-blue-600 hover:underline"
              >Related Articles</a
            >
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

        <div v-for="section in sections" :key="section.id" :id="section.id" class="mb-8">
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
        <p class="text-sm text-gray-600 mt-2">Featured image for "{{ article.title }}"</p>
      </div>

      <!-- Related Articles -->
      <RelatedArticles id="related-articles" :articles="relatedArticles" />
    </div>

    <div class="fixed top-0 left-0 w-full h-1 bg-gray-200">
      <div
        class="h-full bg-blue-600 transition-all duration-300"
        :style="{ width: `${readingProgress}%` }"
      />
    </div>

    <ShareMenu :is-open="shareMenuOpen" @toggle="toggleShareMenu" />

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

<style scoped>
/* Add any additional component-specific styles here */
</style>
