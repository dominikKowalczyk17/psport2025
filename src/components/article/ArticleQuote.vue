<script setup lang="ts">
import type { NewsQuote } from "@/types/News";

defineProps<NewsQuote>();
</script>

<template>
  <blockquote
    class="italic text-2xl font-serif text-gray-700 border-l-4 border-blue-500 pl-4 my-8"
  >
    <p>"{{ text }}"</p>
    <footer v-if="author || position" class="mt-2 text-lg text-gray-600">
      <span v-if="author" class="font-semibold">{{ author }}</span>
      <span v-if="position" class="block text-base">{{ position }}</span>
    </footer>
  </blockquote>
</template>
