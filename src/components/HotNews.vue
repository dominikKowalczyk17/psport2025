<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLoadingStore } from "@/store/loadingStore";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";

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

function getGridClass(index: number): string {
  switch (index) {
    case 0:
      return "md:col-span-6 md:row-span-4";
    case 1:
    case 2:
      return "md:col-span-3 md:row-span-2";
    case 3:
    case 4:
    case 5:
    case 6:
      return "md:col-span-3 md:row-span-2";
    default:
      return "md:col-span-2 md:row-span-2";
  }
}
</script>

<template>
  <section class="mb-12 mt-24">
    <h2 class="text-3xl font-semibold mb-4">Najważniejsze</h2>

    <div v-if="error" class="text-red-500 p-4">
      {{ error }}
    </div>

    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 h-auto md:h-[800px]"
    >
      <article
        v-for="(news, index) in hotNews"
        :key="news.id"
        :class="[
          'relative overflow-hidden rounded-lg cursor-pointer group',
          getGridClass(index),
        ]"
      >
        <router-link :to="{ name: 'news', params: { slug: news.slug } }">
          <div class="relative h-full">
            <img
              :src="news.thumbnailUrl"
              :alt="news.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
            ></div>
            <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p class="text-sm font-semibold mb-1">{{ news.category.title }}</p>
              <h3
                :class="[
                  'font-bold leading-tight mb-1',
                  index === 0 ? 'text-2xl' : 'text-lg',
                ]"
              >
                {{ news.title }}
              </h3>
              <p v-if="index === 0" class="text-sm mt-2">{{ news.excerpt }}</p>
            </div>
          </div>
        </router-link>
      </article>
    </div>
  </section>
</template>
