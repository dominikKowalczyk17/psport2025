// src/components/videoPlayer/VideoDetails.vue
<script setup lang="ts">
import type { Video } from "@/types/Video";
import { formatDateForDisplay, formatViews } from "@/utils/dateFormatters";

const props = defineProps<{
  video: Video;
}>();
</script>

<template>
  <div class="mt-4">
    <div class="flex items-start justify-between">
      <div>
        <h1 class="text-2xl font-bold mb-2">{{ video.title }}</h1>
        <div class="flex items-center text-sm text-gray-500 mb-4 space-x-2">
          <span>{{ formatViews(video.views) }} wyświetleń</span>
          <span>•</span>
          <span>{{ formatDateForDisplay(video.publishDate) }}</span>
          <span v-if="video.isHot" class="text-red-500">• 🔥 Hot</span>
          <span v-if="video.isFeatured" class="text-blue-500">• ⭐ Featured</span>
        </div>
      </div>
    </div>

    <div class="flex items-center space-x-4 mb-4">
      <img
        :src="video.author.avatar"
        :alt="video.author.name"
        class="w-10 h-10 rounded-full"
      />
      <div>
        <h3 class="font-medium">{{ video.author.name }}</h3>
        <p class="text-sm text-gray-500">
          {{ video.category.title }}
        </p>
      </div>
    </div>

    <div class="bg-gray-50 rounded-lg p-4">
      <p class="text-gray-700">{{ video.description }}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in video.tags"
          :key="tag"
          class="px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
