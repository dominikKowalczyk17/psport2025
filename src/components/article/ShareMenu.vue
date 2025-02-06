//src/components/article/RelatedArticles.vue

<script setup lang="ts">
import { Share, Twitter, Facebook, Linkedin } from "lucide-react";

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();

const socialPlatforms = [
  { name: "Twitter", icon: Twitter },
  { name: "Facebook", icon: Facebook },
  { name: "LinkedIn", icon: Linkedin },
];
</script>

<template>
  <div class="relative">
    <!-- Floating Share Button -->
    <button
      @click="emit('toggle')"
      class="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700"
    >
      <Share class="w-6 h-6" />
    </button>

    <!-- Share Menu -->
    <div v-if="isOpen" class="fixed bottom-24 right-8 bg-white rounded-lg shadow-xl p-4">
      <button
        v-for="social in socialPlatforms"
        :key="social.name"
        class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 mb-2"
      >
        <component :is="social.icon" class="w-5 h-5 text-gray-700" />
      </button>
    </div>
  </div>
</template>
