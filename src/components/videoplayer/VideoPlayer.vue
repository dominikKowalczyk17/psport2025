// src/components/videoplayer/VideoPlayer.vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { Play, Pause, Volume2, VolumeX } from "lucide-vue-next";
import LoadingSpinner from "@/components/shared/LoadingSpinner.vue";
import type { Video } from "@/types/Video";

const props = defineProps<{
  video: Video;
}>();

const PLACEHOLDER_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const PLACEHOLDER_THUMBNAIL =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg";

// Use computed properties for video source and thumbnail
const videoSource = computed(() => props.video.url || PLACEHOLDER_VIDEO);
const thumbnailSource = computed(() => props.video.thumbnailUrl || PLACEHOLDER_THUMBNAIL);

const isPlaying = ref(false);
const volume = ref(1);
const progress = ref(0);
const isLoading = ref(true);
const isVideoLoaded = ref(false);
const showControls = ref(true);
const showPlayButton = ref(true);
const videoRef = ref<HTMLVideoElement | null>(null);
const playerRef = ref<HTMLDivElement | null>(null);

watch(
  () => props.video,
  () => {
    isPlaying.value = false;
    progress.value = 0;
    isLoading.value = true;
    isVideoLoaded.value = false;
    showPlayButton.value = true;
    if (videoRef.value) {
      videoRef.value.currentTime = 0;
    }
  },
  { deep: true }
);

onMounted(() => {
  const video = videoRef.value;
  if (!video) return;

  // Set initial volume
  video.volume = volume.value;

  const cleanup = () => {
    if (!video) return;
    video.removeEventListener("timeupdate", handleTimeUpdate);
    video.removeEventListener("loadeddata", handleLoadedData);
    video.removeEventListener("waiting", handleWaiting);
    video.removeEventListener("playing", handlePlaying);
    video.removeEventListener("error", handleError);
  };

  const handleTimeUpdate = () => {
    if (!video) return;
    progress.value = (video.currentTime / video.duration) * 100;
  };

  const handleLoadedData = () => {
    isLoading.value = false;
    isVideoLoaded.value = true;
  };

  const handleWaiting = () => {
    if (isPlaying.value) {
      isLoading.value = true;
    }
  };

  const handlePlaying = () => {
    isLoading.value = false;
    showPlayButton.value = false;
    setTimeout(() => (showControls.value = false), 2000);
  };

  const handleError = (e: Event) => {
    const videoElement = e.target as HTMLVideoElement;
    const error = videoElement.error;

    isLoading.value = false;
    isVideoLoaded.value = false;

    // Fallback to placeholder video if main video fails
    if (error && error.code === 4) {
      videoElement.src =
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
      videoElement.load(); // Important: need to call load() after changing src
    }
  };

  video.addEventListener("timeupdate", handleTimeUpdate);
  video.addEventListener("loadeddata", handleLoadedData);
  video.addEventListener("waiting", handleWaiting);
  video.addEventListener("playing", handlePlaying);
  video.addEventListener("error", handleError);

  onUnmounted(cleanup);
});

const togglePlay = () => {
  if (!videoRef.value) return;

  if (isPlaying.value) {
    videoRef.value.pause();
  } else {
    videoRef.value.play();
  }
  isPlaying.value = !isPlaying.value;
};

const handleVolumeChange = (e: Event) => {
  const newVolume = Number.parseFloat((e.target as HTMLInputElement).value);
  volume.value = newVolume;
  if (videoRef.value) {
    videoRef.value.volume = newVolume;
  }
};

const handleProgressChange = (e: Event) => {
  const newProgress = Number.parseFloat((e.target as HTMLInputElement).value);
  progress.value = newProgress;
  if (videoRef.value) {
    videoRef.value.currentTime = (newProgress / 100) * videoRef.value.duration;
  }
};

const handleMouseEnter = () => {
  showControls.value = true;
};

const handleMouseLeave = () => {
  if (isPlaying.value) {
    showControls.value = false;
  }
};
</script>

<template>
  <div
    ref="playerRef"
    class="relative w-full max-w-3xl mx-auto group"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="showControls = true"
    tabindex="0"
  >
    <div class="relative aspect-video bg-gray-900">
      <!-- Background thumbnail -->
      <img
        v-if="!isPlaying"
        :src="thumbnailSource"
        :alt="props.video.title"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <video
        ref="videoRef"
        class="w-full h-full"
        :src="videoSource"
        :poster="thumbnailSource"
        @click="togglePlay"
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>

      <!-- Loading spinner -->
      <div
        v-if="isLoading && isPlaying"
        class="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center"
      >
        <LoadingSpinner height="h-16" />
      </div>

      <!-- Play button overlay -->
      <button
        v-if="showPlayButton || !isPlaying"
        @click="togglePlay"
        class="absolute inset-0 flex items-center justify-center text-white hover:text-blue-500 transition-colors bg-black bg-opacity-30 hover:bg-opacity-40"
      >
        <Play :size="64" />
      </button>

      <!-- Controls overlay -->
      <div
        class="absolute inset-x-0 bottom-0 flex flex-col p-4 bg-gradient-to-t from-black to-transparent transition-opacity duration-300"
        :class="showControls ? 'opacity-100' : 'opacity-0'"
      >
        <div class="flex items-center justify-end mb-2">
          <div class="flex items-center">
            <Volume2 v-if="volume > 0" :size="24" class="text-white mr-2" />
            <VolumeX v-else :size="24" class="text-white mr-2" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              :value="volume"
              @input="handleVolumeChange"
              class="w-24"
            />
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          :value="progress"
          @input="handleProgressChange"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>
