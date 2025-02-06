//src/components/article/ArticleHeader.vue

<script setup lang="ts">
import { ArrowUpIcon } from "lucide-vue-next";

defineProps<{
  title: string;
  scrolled: boolean;
}>();

const emit = defineEmits<{
  (e: "scrollToTop"): void;
}>();
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md transition-all duration-300"
    :class="{ 'py-2': scrolled, 'py-4': !scrolled }"
  >
    <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
      <h1
        class="text-xl font-bold text-gray-800 transition-all duration-300"
        :class="{ 'text-2xl': !scrolled }"
      >
        {{ title }}
      </h1>
      <button @click="emit('scrollToTop')" class="text-blue-600 hover:text-blue-800">
        <ArrowUpIcon class="w-6 h-6" />
      </button>
    </div>
  </header>
</template>
