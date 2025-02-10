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

const categoryItems = ref<(News | Video)[]>([]);
const error = ref<string | null>(null);
const loadingStore = useLoadingStore();

onMounted(async () => {
  try {
    loadingStore.startLoading();
    if (props.category.id === 1) {
      const videos = await videosService.getVideosByCategory(props.category.id);
      categoryItems.value = props.videoCategory
        ? videos.filter((v) => v.tags.includes(props.videoCategory!))
        : videos;
    } else {
      categoryItems.value = await newsService.getNewsByCategory(
        props.category.id
      );
    }
  } catch (e) {
    error.value = (e as Error).message;
    console.error(
      `Error loading content for category ${props.category.title}:`,
      e
    );
  } finally {
    loadingStore.stopLoading();
  }
});

const isVideo = computed(() => props.category.id === 1);

// Dodajemy helper do sprawdzania typu
const isNewsItem = (item: News | Video): item is News => {
  return "slug" in item && "excerpt" in item;
};
</script>

<template>
  <section class="bg-white shadow-lg rounded-lg overflow-hidden">
    <h2 class="text-2xl font-bold p-4 bg-black text-white">
      {{ title || category.title }}
    </h2>
    <div class="p-4">
      <div v-if="error" class="text-red-500">{{ error }}</div>
      <div
        v-else
        class="grid gap-4"
        :class="isVideo ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'"
      >
        <div
          v-for="item in categoryItems.slice(0, 4)"
          :key="item.id"
          :class="isVideo ? 'aspect-video' : ''"
        >
          <router-link
            :to="
              isVideo
                ? { name: 'video', params: { id: item.id } }
                : {
                    name: 'news',
                    params: { slug: isNewsItem(item) ? item.slug : '' },
                  }
            "
            class="block group"
          >
            <div
              class="relative overflow-hidden rounded-lg"
              :class="isVideo ? 'aspect-video' : 'h-48'"
            >
              <img
                :src="item.thumbnailUrl"
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                v-if="isVideo"
                class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <svg
                  class="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <h3
              class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-sky-700"
            >
              {{ item.title }}
            </h3>
            <p
              v-if="!isVideo && isNewsItem(item)"
              class="mt-1 text-sm text-gray-500"
            >
              {{ item.excerpt }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
