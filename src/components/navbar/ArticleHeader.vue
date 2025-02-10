// components/navbar/ArticleHeader.vue
<script setup lang="ts">
import { ArrowUpIcon } from "lucide-vue-next";

defineProps<{
  title: string;
  isScrolled: boolean;
}>();

const emit = defineEmits<{
  (e: "scrollTop"): void;
}>();
</script>

<template>
  <div
    class="flex items-center space-x-4 transition-opacity duration-300"
    :class="isScrolled ? 'opacity-100' : 'opacity-0'"
  >
    <h1 class="text-sm font-medium text-gray-800 truncate max-w-[300px]">
      {{ title }}
    </h1>
    <button
      @click="emit('scrollTop')"
      class="flex-shrink-0 p-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
    >
      <ArrowUpIcon class="w-4 h-4" />
    </button>
  </div>
</template>
