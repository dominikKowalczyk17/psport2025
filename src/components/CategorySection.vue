<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useLoadingStore } from "@/store/loadingStore";
import type { Category } from "@/types/Category";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";
import { videosService } from "@/mocks/services/videosService";
import type { Video } from "@/types/Video";

interface Props {
  category: Category;
  title?: string;
  videoCategory?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  videoCategory: undefined,
});

const categoryNews = ref<News[]>([]);
const categoryVideos = ref<Video[]>([]);
const error = ref<string | null>(null);
const loadingStore = useLoadingStore();

onMounted(async () => {
  try {
    loadingStore.startLoading();
    if (props.category.id === 1) {
      const videos = await videosService.getVideosByCategory(props.category.id);
      const featuredVideos = await videosService.getFeaturedVideos(props.category.id);
      categoryVideos.value = props.videoCategory
        ? [...featuredVideos, ...videos].filter((v) =>
            v.tags.includes(props.videoCategory!)
          )
        : [...featuredVideos, ...videos];
      console.log("Pobrane wideo:", categoryVideos.value);
    } else {
      categoryNews.value = await newsService.getNewsByCategory(props.category.id);
      console.log("Pobrane newsy:", categoryNews.value);
    }
  } catch (e) {
    error.value = (e as Error).message;
    console.error(`Error loading content for category ${props.category.title}:`, e);
  } finally {
    loadingStore.stopLoading();
  }
});

const featuredItem = computed(() =>
  props.category.id === 1
    ? categoryVideos.value.find((video) => video.isFeatured)
    : categoryNews.value.find((news) => news.isFeatured)
);

const remainingItems = computed(() =>
  props.category.id === 1
    ? categoryVideos.value.filter((video) => !video.isFeatured)
    : categoryNews.value.filter((news) => !news.isFeatured)
);
</script>

<template>
  <section class="mb-12">
    <!-- For video sections -->
    <template v-if="category.id === 1">
      <h2 class="text-3xl font-semibold mb-6">{{ title || category.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Featured Video -->
        <router-link
          v-if="featuredItem"
          :to="{ name: 'video', params: { id: featuredItem.id } }"
          class="lg:col-span-2 lg:row-span-2 overflow-hidden group cursor-pointer rounded-lg bg-black block"
        >
          <div class="relative aspect-video">
            <img
              :src="featuredItem.thumbnailUrl"
              :alt="featuredItem.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center"
            >
              <svg
                class="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <path d="M15 12L10 15V9L15 12Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 text-white bg-gradient-to-t from-black to-transparent"
            >
              <h3 class="text-xl font-bold mb-2">{{ featuredItem.title }}</h3>
              <div class="flex items-center space-x-4">
                <span class="flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" stroke-width="2" />
                    <path d="M12 6v6l4 2" stroke-width="2" />
                  </svg>
                  {{ new Date(featuredItem.publishDate).toLocaleTimeString() }}
                </span>
              </div>
            </div>
          </div>
        </router-link>

        <!-- Remaining Videos -->
        <router-link
          v-for="video in remainingItems"
          :key="video.id"
          :to="{ name: 'video', params: { id: video.id } }"
          class="overflow-hidden group cursor-pointer rounded-lg bg-black block"
        >
          <div class="relative aspect-video">
            <img
              :src="video.thumbnailUrl"
              :alt="video.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-opacity-30 flex items-center justify-center"
            >
              <svg
                class="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <path d="M15 12L10 15V9L15 12Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black to-transparent"
            >
              <h3 class="text-lg font-bold mb-1 line-clamp-2">{{ video.title }}</h3>
              <div class="flex items-center space-x-3 text-sm">
                <span class="flex items-center">
                  <svg
                    class="w-3 h-3 mr-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" stroke-width="2" />
                    <path d="M12 6v6l4 2" stroke-width="2" />
                  </svg>
                  {{ new Date(video.publishDate).toLocaleTimeString() }}
                </span>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </template>

    <!-- For regular news sections -->
    <template v-else>
      <h2 class="text-3xl font-semibold mb-6">{{ category.title }}</h2>
      <div class="space-y-8">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-4">
            <!-- Pojedynczy news -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <router-link
                v-for="item in categoryNews"
                :key="item.id"
                :to="{ name: 'news', params: { slug: item.slug } }"
                class="flex items-center space-x-4 group cursor-pointer"
              >
                <!-- Opakowujemy obrazek w relative -->
                <div class="relative w-60 h-60 flex-shrink-0 overflow-hidden rounded-md">
                  <img
                    :src="item.thumbnailUrl"
                    :alt="item.title"
                    class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                  <!-- Gradient, podobny do tego w szablonie video -->
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-black to-transparent"
                  ></div>
                </div>
                <div>
                  <p
                    class="flex-grow text-sm group-hover:text-primary transition-colors duration-200"
                  >
                    {{ item.title }}
                  </p>
                  <p
                    class="flex-grow text-sm group-hover:text-primary transition-colors duration-200"
                  >
                    {{ item.excerpt }}
                  </p>
                  <span>
                    {{ new Date(item.publishDate).toLocaleTimeString() }}
                  </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
