// components/VideoTarget.vue
<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import VideoList from "@/components/videoplayer/VideoList.vue";
import LoadingSpinner from "@/components/shared/LoadingSpinner.vue";
import { useVideoStore } from "@/store/videos";
import VideoDetails from "@/components/videoplayer/VideoDetails.vue";
import VideoPlayer from "@/components/videoplayer/VideoPlayer.vue";
import { useLoadingStore } from "@/store/loadingStore";

const route = useRoute();
const loadingStore = useLoadingStore();
const videoStore = useVideoStore();
const { currentVideo, isLoading } = storeToRefs(videoStore);

const loadVideo = async (url: string) => {
  await videoStore.fetchVideoByUrl(url);
};

onMounted(async () => {
  try {
    loadingStore.startLoading();
    if (route.params.url) {
      await loadVideo(route.params.url as string);
    }
  } catch (error) {
    new Error(`Error: ${error}`);
  } finally {
    loadingStore.stopLoading();
  }
});

watch(
  () => route.params.url,
  async (newUrl) => {
    if (newUrl) {
      await loadVideo(newUrl as string);
    }
  }
);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div class="lg:col-span-2">
        <div v-if="!isLoading">
          <VideoPlayer v-if="currentVideo" :video="currentVideo" />
          <VideoDetails v-if="currentVideo" :video="currentVideo" />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold mb-4">Related Videos</h2>
        <VideoList v-if="currentVideo" :currentUrl="currentVideo.url" />
      </div>
    </div>
  </div>
</template>
