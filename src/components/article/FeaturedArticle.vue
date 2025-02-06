<script setup lang="ts">
import { ref, onMounted } from "vue";
import { newsService } from "@/mocks/services/newsService";
import type { News } from "@/types/News";

const featuredArticle = ref<News | null>(null);

onMounted(async () => {
  try {
    const articles = await newsService.getNews();
    featuredArticle.value =
      articles.find((article) => article.isFeatured) || null;
  } catch (error) {
    console.error("Error fetching featured article:", error);
  }
});
</script>

<template>
  <div
    v-if="featuredArticle"
    class="bg-white shadow-lg rounded-lg overflow-hidden"
  >
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="h-48 w-full object-cover md:w-48"
          :src="featuredArticle.imageUrl"
          :alt="featuredArticle.title"
        />
      </div>
      <div class="p-8">
        <div
          class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
        >
          Featured Article
        </div>
        <a
          :href="'/news/' + featuredArticle.slug"
          class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >{{ featuredArticle.title }}</a
        >
        <p class="mt-2 text-gray-500">{{ featuredArticle.excerpt }}</p>
      </div>
    </div>
  </div>
</template>
