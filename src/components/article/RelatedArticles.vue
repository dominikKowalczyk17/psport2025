//src/components/article/RelatedArticles.vue

<script setup lang="ts">
import type { News } from "@/types/News";
import { formatDateForDisplay } from "@/utils/dateFormatters";

defineProps<{
  articles: News[];
}>();
</script>

<template>
  <div v-if="articles.length" class="mb-12">
    <h3 class="text-2xl font-bold mb-4">Zobacz także</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="article in articles.slice(0, 3)"
        :key="article.id"
        class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      >
        <router-link
          :to="{ name: 'news', params: { slug: article.slug } }"
          class="group"
        >
          <img
            :src="article.thumbnailUrl"
            :alt="article.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h4 class="font-bold text-lg mb-2">{{ article.title }}</h4>
            <p class="text-sm text-gray-600">
              {{ formatDateForDisplay(article.publishDate) }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
