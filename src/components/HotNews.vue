<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoadingStore } from "@/store/loadingStore";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";
import { formatDateForDisplay } from "@/utils/dateFormatters";

const hotNews = ref<News[]>([]);
const error = ref<string | null>(null);
const loadingStore = useLoadingStore();

onMounted(async () => {
  try {
    loadingStore.startLoading();
    hotNews.value = await newsService.getHotNews();
  } catch (e) {
    error.value = (e as Error).message;
    console.error("Error loading hot news:", e);
  } finally {
    loadingStore.stopLoading();
  }
});
</script>

<template>
  <section class="mb-12">
    <h2 class="text-3xl font-bold mb-6 text-center">
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
      >
        Breaking News
      </span>
    </h2>

    <div v-if="error" class="text-red-500 p-4">
      {{ error }}
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="(news, index) in hotNews.slice(0, 3)"
        :key="news.id"
        class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <router-link :to="{ name: 'news', params: { slug: news.slug } }">
          <div class="relative">
            <img
              :src="news.thumbnailUrl"
              :alt="news.title"
              class="w-full h-48 object-cover"
            />
            <div
              class="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold"
            >
              HOT
            </div>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold mb-2 line-clamp-2">
              {{ news.title }}
            </h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{{ news.excerpt }}</p>
            <div class="flex justify-between items-center text-sm text-gray-500">
              <span>{{ news.category.title }}</span>
              <span>{{ formatDateForDisplay(news.publishDate) }}</span>
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </section>
</template>
