//src/components/videoplayer/VideoPlayer.vue

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

const videoSource = computed(() => props.video.url || PLACEHOLDER_VIDEO);
const thumbnailSource = computed(() => props.video.thumbnailUrl || PLACEHOLDER_THUMBNAIL);

const isPlaying = ref(false);
const volume = ref(1);
const progress = ref(0);
const isLoading = ref(true);
const isVideoLoaded = ref(false);
const showControls = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);
const playerRef = ref<HTMLDivElement | null>(null);
const progressRef = ref<HTMLDivElement | null>(null);
const volumeRef = ref<HTMLDivElement | null>(null);
const showVolumeBar = ref(false);

watch(
  () => props.video,
  () => {
    isPlaying.value = false;
    progress.value = 0;
    isLoading.value = true;
    isVideoLoaded.value = false;
    if (videoRef.value) {
      videoRef.value.currentTime = 0;
    }
  },
  { deep: true }
);

onMounted(() => {
  const video = videoRef.value;
  if (!video) return;

  video.volume = volume.value;

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
    setTimeout(() => (showControls.value = false), 2000);
  };

  const handleError = (e: Event) => {
    const videoElement = e.target as HTMLVideoElement;
    isLoading.value = false;
    isVideoLoaded.value = false;
    if (videoElement.error && videoElement.error.code === 4) {
      videoElement.src = PLACEHOLDER_VIDEO;
      videoElement.load();
    }
  };

  video.addEventListener("timeupdate", handleTimeUpdate);
  video.addEventListener("loadeddata", handleLoadedData);
  video.addEventListener("waiting", handleWaiting);
  video.addEventListener("playing", handlePlaying);
  video.addEventListener("error", handleError);

  onUnmounted(() => {
    video.removeEventListener("timeupdate", handleTimeUpdate);
    video.removeEventListener("loadeddata", handleLoadedData);
    video.removeEventListener("waiting", handleWaiting);
    video.removeEventListener("playing", handlePlaying);
    video.removeEventListener("error", handleError);
  });
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

const handleVolumeChange = (e: MouseEvent) => {
  if (!volumeRef.value || !videoRef.value) return;
  const rect = volumeRef.value.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  volume.value = Math.max(0, Math.min(1, pos));
  videoRef.value.volume = volume.value;
};

const handleProgressChange = (e: MouseEvent) => {
  if (!progressRef.value || !videoRef.value) return;
  const rect = progressRef.value.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  videoRef.value.currentTime = pos * videoRef.value.duration;
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
    class="relative w-full max-w-5xl mx-auto aspect-video bg-black"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <video
      ref="videoRef"
      :src="videoSource"
      :poster="thumbnailSource"
      class="w-full h-full"
      @click="togglePlay"
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>

    <div
      v-if="isLoading && !isVideoLoaded"
      class="absolute inset-0 flex items-center justify-center"
    >
      <LoadingSpinner />
    </div>

    <button
      v-if="!isPlaying"
      @click="togglePlay"
      class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-40"
    >
      <Play class="w-16 h-16 text-white" />
    </button>

    <div
      v-if="showControls"
      class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
    >
      <div
        ref="progressRef"
        class="w-full h-1 bg-white bg-opacity-30 cursor-pointer mb-4"
        @click="handleProgressChange"
      >
        <div class="h-full bg-white" :style="{ width: `${progress}%` }" />
      </div>
      <div class="flex items-center justify-between">
        <button @click="togglePlay" class="text-white">
          <Pause v-if="isPlaying" class="w-6 h-6" />
          <Play v-else class="w-6 h-6" />
        </button>
        <div
          class="flex items-center gap-2"
          @mouseenter="showVolumeBar = true"
          @mouseleave="showVolumeBar = false"
        >
          <!-- Pasek głośności -->
          <div
            ref="volumeRef"
            class="w-20 h-1 bg-white bg-opacity-30 cursor-pointer"
            v-if="showVolumeBar"
            @click="handleVolumeChange"
          >
            <div class="h-full bg-white" :style="{ width: `${volume * 100}%` }" />
          </div>

          <!-- Ikona głośności -->
          <button @click="volume = volume > 0 ? 0 : 1" class="text-white">
            <Volume2 v-if="volume > 0" class="w-6 h-6" />
            <VolumeX v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
