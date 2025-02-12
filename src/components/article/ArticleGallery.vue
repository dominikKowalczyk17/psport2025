<script setup lang="ts">
import { ref } from "vue";
import { XIcon, ChevronLeftIcon, ChevronRightIcon, ZoomInIcon } from "lucide-vue-next";
import type { NewsGalleryImage } from "@/types/News";

const props = defineProps<{
  images: NewsGalleryImage[];
}>();

const lightboxOpen = ref(false);
const currentImageIndex = ref(0);

const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
};

const closeLightbox = () => {
  lightboxOpen.value = false;
};

const prevImage = (event: Event) => {
  event.stopPropagation();
  currentImageIndex.value =
    (currentImageIndex.value - 1 + props.images.length) % props.images.length;
};

const nextImage = (event: Event) => {
  event.stopPropagation();
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};
</script>

<template>
  <div class="mb-12">
    <h3 class="text-2xl font-bold mb-4">Galeria</h3>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative cursor-pointer"
        @click="openLightbox(index)"
      >
        <img
          :src="image.thumbnail"
          :alt="image.caption"
          class="w-full h-48 object-cover rounded-lg"
        />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          <ZoomInIcon class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      @click="closeLightbox"
    >
      <button @click="closeLightbox" class="absolute top-4 right-4 text-white">
        <XIcon class="w-8 h-8" />
      </button>
      <img
        :src="images[currentImageIndex].full"
        :alt="images[currentImageIndex].caption"
        class="max-w-full max-h-full object-contain"
      />
      <button @click="prevImage" class="absolute left-4 text-white">
        <ChevronLeftIcon class="w-12 h-12" />
      </button>
      <button @click="nextImage" class="absolute right-4 text-white">
        <ChevronRightIcon class="w-12 h-12" />
      </button>
      <p
        class="absolute bottom-4 left-0 right-0 text-center text-black bg-opacity-75 p-2 rounded"
      >
        {{ images[currentImageIndex].caption }}
      </p>
    </div>
  </div>
</template>
