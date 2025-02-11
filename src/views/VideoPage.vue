//src/views/VideoPage.vue

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { categoryService } from "@/mocks/services/categoryService";
import { videosService } from "@/mocks/services/videosService";
import type { Category } from "@/types/Category";
import type { Video } from "@/types/Video";
import VideoCard from "@/components/video/VideoCard.vue";

const selectedCategory = ref("Wszystkie");
const categories = ref<Category[]>([]);
const videos = ref<Video[]>([]);
const error = ref<string | null>(null);

const filteredVideos = computed(() => {
  console.log("Selected Category:", selectedCategory.value);

  // Znajdujemy kategorię "Wideo" (id=1), żeby ją uwzględnić w "Wszystkie"
  const videoCategory = categories.value.find((cat) => cat.id === 1);
  const videoCategoryTitle = videoCategory ? videoCategory.title.toLowerCase() : null;

  // Jeśli wybrana kategoria to "Wszystkie", zwracamy wszystkie filmy oprócz tych oznaczonych jako "Wideo"
  if (selectedCategory.value.toLowerCase() === "wszystkie") {
    return videos.value;
  }

  // Znalezienie wybranej kategorii
  const selectedCat = categories.value.find(
    (cat) => cat.title.toLowerCase() === selectedCategory.value.toLowerCase()
  );

  // Sprawdzenie, czy wideo pasuje do tagów lub kategorii
  return videos.value.filter((video) => {
    const matchesTag = video.tags.some(
      (tag) => tag.toLowerCase() === selectedCategory.value.toLowerCase()
    );

    const matchesCategory =
      video.category.title.toLowerCase() === selectedCategory.value.toLowerCase();

    // Sprawdzamy, czy kategoria ma submenu i czy któreś z jego tytułów pasuje do tagów wideo
    const matchesSubmenu = selectedCat?.submenu?.some((sub) =>
      video.tags.some((tag) => tag.toLowerCase() === sub.title.toLowerCase())
    );

    return matchesTag || matchesCategory || matchesSubmenu;
  });
});

// Usuwamy kategorię "Wideo" z listy kategorii
const displayedCategories = computed(() =>
  categories.value.filter((category) => category.id !== 1)
);

const featuredVideos = computed(() =>
  filteredVideos.value.filter((video) => video.isFeatured)
);
const regularVideos = computed(() =>
  filteredVideos.value.filter((video) => !video.isFeatured)
);

onMounted(async () => {
  try {
    const [videosData, categoriesData] = await Promise.all([
      videosService.getVideos(),
      categoryService.getCategories(),
    ]);
    videos.value = videosData;
    console.log(videosData);
    categories.value = categoriesData;
  } catch (e) {
    error.value = (e as Error).message;
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-4xl font-bold text-gray-900">Sportowe Hity i Wywiady</h1>

    <div class="mb-8 flex flex-wrap gap-3">
      <button
        @click="selectedCategory = 'Wszystkie'"
        :class="[
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          selectedCategory === 'Wszystkie'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        ]"
      >
        Wszystkie
      </button>
      <button
        v-for="category in displayedCategories"
        :key="category.id"
        @click="selectedCategory = category.title"
        :class="[
          'rounded-full px-4 py-2 text-sm font-medium transition-colors',
          selectedCategory === category.title
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
        ]"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <template v-if="featuredVideos.length > 0">
        <VideoCard
          v-for="video in featuredVideos"
          :key="video.id"
          v-bind="video"
          size="large"
          class="col-span-full sm:col-span-2 lg:col-span-2"
        />
      </template>

      <VideoCard
        v-for="video in regularVideos"
        :key="video.id"
        v-bind="video"
        class="col-span-1"
      />
    </div>
  </div>
</template>
