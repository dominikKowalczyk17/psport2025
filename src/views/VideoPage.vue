// src/pages/VideoPage.vue
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import VideoList from "@/components/videoPlayer/VideoList.vue";
import LoadingSpinner from "@/components/shared/LoadingSpinner.vue";
import { useVideoStore } from "@/store/videos";
import VideoDetails from "@/components/videoplayer/VideoDetails.vue";
import VideoPlayer from "@/components/videoplayer/VideoPlayer.vue";

const route = useRoute();
const videoStore = useVideoStore();
const { currentVideo, isLoading } = storeToRefs(videoStore);

const loadVideo = async (id: number) => {
  await videoStore.fetchCurrentVideo(id);
};

onMounted(async () => {
  if (route.params.id) {
    await loadVideo(parseInt(route.params.id as string));
  }
});

watch(
  () => route.params.id,
  async (newId) => {
    if (newId) {
      await loadVideo(parseInt(newId as string));
    }
  }
);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div v-if="isLoading">
          <div class="aspect-video bg-gray-900">
            <LoadingSpinner height="h-full" />
          </div>
        </div>
        <div v-else>
          <VideoPlayer v-if="currentVideo" :video="currentVideo" />
          <VideoDetails v-if="currentVideo" :video="currentVideo" />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Related Videos</h2>
        <div v-if="isLoading">
          <LoadingSpinner height="h-96" />
        </div>
        <VideoList v-else-if="currentVideo" :currentId="currentVideo.id" />
      </div>
    </div>
  </div>
</template>
