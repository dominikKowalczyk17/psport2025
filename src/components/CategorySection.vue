<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import type { Category } from "@/types/Category";
import type { News } from "@/types/News";
import { newsService } from "@/mocks/services/newsService";

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
const loading = ref(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    loading.value = true;
    if (props.category.id === 1) {
      // Video section
      const videos = await newsService.getNewsByCategory(props.category.id);
      // Filter by videoCategory if provided
      categoryNews.value = props.videoCategory
        ? videos.filter((v) => v.tags.includes(props.videoCategory!))
        : videos;
    } else {
      const news = await newsService.getNewsByCategory(props.category.id);
      categoryNews.value = news;
    }
  } catch (e) {
    error.value = (e as Error).message;
    console.error(
      `Error loading content for category ${props.category.title}:`,
      e
    );
  } finally {
    loading.value = false;
  }
});

const featuredItem = computed(() => categoryNews.value[0]);
const remainingItems = computed(() => categoryNews.value.slice(1));
</script>

<template>
  <section class="mb-12">
    <!-- For video sections -->
    <template v-if="category.id === 1">
      <h2 class="text-3xl font-semibold mb-6">{{ title || category.title }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Featured Video -->
        <div
          v-if="featuredItem"
          class="lg:col-span-2 lg:row-span-2 overflow-hidden group cursor-pointer rounded-lg bg-black"
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
                <path
                  d="M15 12L10 15V9L15 12Z"
                  fill="currentColor"
                  stroke="none"
                />
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
        </div>

        <!-- Remaining Videos -->
        <div
          v-for="video in remainingItems"
          :key="video.id"
          class="overflow-hidden group cursor-pointer rounded-lg bg-black"
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
                <path
                  d="M15 12L10 15V9L15 12Z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black to-transparent"
            >
              <h3 class="text-lg font-bold mb-1 line-clamp-2">
                {{ video.title }}
              </h3>
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
        </div>
      </div>
    </template>

    <!-- For regular news sections -->
    <template v-else>
      <h2 class="text-3xl font-semibold mb-6">{{ category.title }}</h2>
      <div class="space-y-8">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="bg-primary text-primary-foreground px-6 py-4">
            <h3 class="text-2xl font-semibold">{{ category.title }}</h3>
          </div>
          <div class="p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                v-for="(item, index) in categoryNews"
                :key="index"
                class="flex items-center space-x-4 group cursor-pointer"
              >
                <div
                  class="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-md"
                >
                  <img
                    :src="item.thumbnailUrl"
                    :alt="item.title"
                    class="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <p
                  class="flex-grow text-sm group-hover:text-primary transition-colors duration-200"
                >
                  {{ item.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>
