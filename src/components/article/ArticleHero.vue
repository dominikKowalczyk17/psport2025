//src/components/article/ArticleHero.vue

<script setup lang="ts">
import type { News } from "@/types/News";
import { formatDateForDisplay } from "@/utils/dateFormatters";

defineProps<{
  article: News;
}>();
</script>

<template>
  <div class="relative h-[50vh] md:h-[70vh] mb-8">
    <img
      :src="article.imageUrl"
      :alt="article.title"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
    ></div>
    <div class="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
      <h2 class="text-3xl md:text-5xl font-bold mb-4">{{ article.title }}</h2>
      <p class="text-xl md:text-2xl mb-4">{{ article.excerpt }}</p>
      <div class="flex items-center">
        <img
          :src="article.author.avatar"
          :alt="article.author.name"
          class="w-10 h-10 md:w-12 md:h-12 rounded-full mr-4"
        />
        <div>
          <p class="font-semibold">{{ article.author.name }}</p>
          <p class="text-sm">{{ formatDateForDisplay(article.publishDate) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
