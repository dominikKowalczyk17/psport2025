<script setup lang="ts">
import { onMounted, computed, ref } from "vue";
import { useNewsStore } from "@/store/news";
import { useLoadingStore } from "@/store/loadingStore";
import { newsService } from "@/mocks/services/newsService";
import { useRoute } from "vue-router";
import { categoryService } from "@/mocks/services/categoryService";
import { getSubCategoryTitle } from "@/utils/getSubCategoryTitle";
import type { News } from "@/types/News";
import ArticleHeader from "@/components/article/ArticleHeader.vue";

const route = useRoute();
const loadingStore = useLoadingStore();
const newsStore = useNewsStore();
const error = ref<string | null>(null);
const news = ref<News[]>([]);
const isDataLoaded = ref(false);

const subCategory = computed(() => route.params.subcategory as string);
const categoryHref = computed(() => route.params.category as string);

const subCategoryTitle = computed(() => {
  return getSubCategoryTitle(categoryHref.value, subCategory.value);
});

onMounted(async () => {
  loadingStore.startLoading();
  try {
    const category = await categoryService.getCategories();
    const categoryId = category.find((cat) => cat.href === route.params.category)?.id;
    if (categoryId) {
      news.value = await newsService.getNewsByCategory(categoryId);
      news.value = news.value.filter((item) => {
        return item.subCategory?.href === subCategory.value;
      });
    }
    isDataLoaded.value = true;
  } catch (e) {
    error.value = (e as Error).message;
    console.error("Error fetching news:", error.value);
  } finally {
    loadingStore.stopLoading();
  }
});

const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">
      {{ subCategoryTitle }}
    </h1>
    <div v-if="error" class="text-center text-red-600">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div v-if="news.length === 0" class="text-gray-600">
        No news found for this subcategory.
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="item in news"
          :key="item.id"
          class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <router-link :to="`/news/${item.slug}`">
            <img
              :src="item.thumbnailUrl"
              :alt="item.title"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ item.title }}</h2>
              <p class="text-gray-600 mb-4">{{ item.excerpt }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{
                  formatDate(item.publishDate)
                }}</span>
                <span class="text-blue-600">Czytaj więcej</span>
              </div>
            </div>
          </router-link>
        </article>
      </div>
    </div>
  </div>
</template>
