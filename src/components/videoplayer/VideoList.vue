// src/components/videoPlayer/VideoList.vue
<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Video } from "@/types/Video";
import { videosService } from "@/mocks/services/videosService";
import { formatViews } from "@/utils/dateFormatters";

const props = defineProps<{
  currentUrl: string;
}>();

const videos = ref<Video[]>([]);

onMounted(async () => {
  videos.value = await videosService.getRelatedVideos(props.currentUrl);
});
</script>

<template>
  <div class="space-y-4">
    <router-link
      v-for="video in videos"
      :key="video.id"
      :to="`/video/${video.url}`"
      class="flex items-center space-x-3 p-2 rounded-lg hover: scale-105 transition-transform duration-300"
    >
      <img
        :src="video.thumbnailUrl || '/placeholder.svg'"
        :alt="video.title"
        class="w-[120px] h-[68px] rounded object-cover"
      />
      <div class="flex-1">
        <h3 class="text-sm font-medium line-clamp-2">{{ video.title }}</h3>
        <p class="text-xs text-gray-500">{{ video.author.name }}</p>
        <p class="text-xs text-gray-500">{{ formatViews(video.views) }} views</p>
      </div>
    </router-link>
  </div>
</template>
