<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import CategorySection from "@/components/CategorySection.vue";
import type { Category } from "@/types/Category";
import { categoryService } from "@/mocks/services/categoryService";
import HotNews from "@/components/HotNews.vue";
import FeaturedArticle from "@/components/article/FeaturedArticle.vue";

const categories = ref<Category[]>([]);
const error = ref<string | null>(null);

const videoCategory = computed(() => categories.value.find((cat) => cat.id === 1));

const newsCategories = computed(() => categories.value.filter((cat) => cat.id !== 1));

onMounted(async () => {
  try {
    categories.value = await categoryService.getCategories();
  } catch (e) {
    error.value = (e as Error).message;
    console.error("Error fetching categories:", e);
  }
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div
      v-if="error"
      class="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8"
      role="alert"
    >
      <p class="font-bold">Error</p>
      <p>{{ error }}</p>
    </div>

    <template v-else>
      <HotNews class="mb-12" />

      <FeaturedArticle class="mb-12" />

      <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <CategorySection
          v-if="videoCategory"
          :category="videoCategory"
          title="Polecane Wideo"
          class="md:col-span-2"
        />
        <CategorySection
          v-for="category in newsCategories.slice(0, 2)"
          :key="category.id"
          :category="category"
        />
      </section>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CategorySection
          v-for="category in newsCategories.slice(2)"
          :key="category.id"
          :category="category"
        />
      </section>
    </template>
  </div>
</template>
