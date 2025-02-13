<script setup lang="ts">
import { ref, onMounted, computed, shallowRef, watch } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "@/store/news";
import { useLoadingStore } from "@/store/loadingStore";
import { newsService } from "@/mocks/services/newsService";
import { categoryService } from "@/mocks/services/categoryService";
import type { Category } from "@/types/Category";

const route = useRoute();
const newsStore = useNewsStore();
const loadingStore = useLoadingStore();
const currentComponent = shallowRef<any>(null);

const category = ref<Category | null>(null);
const error = ref<string | null>(null);

const categoryHref = computed(() => route.params.href as string);

const fetchCategoryData = async () => {
  loadingStore.startLoading();
  try {
    const categories = await categoryService.getCategories();
    category.value = categories.find((c) => c.href === categoryHref.value) || null;
    if (category.value) {
      const newsData = await newsService.getNewsByCategory(category.value.id);
      newsStore.$patch((state) => {
        state.newsByCategory[category.value!.id] = newsData;
      });
    } else {
      error.value = "Category not found";
    }
  } catch (e) {
    error.value = "Failed to load category news";
  } finally {
    loadingStore.stopLoading();
  }
};

onMounted(fetchCategoryData);

watch(categoryHref, fetchCategoryData);

const news = computed(() => {
  if (category.value) {
    return newsStore.getNewsByCategory(category.value.id.toString());
  }
  return [];
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
    <div v-if="error" class="text-center text-red-600">
      <p>{{ error }}</p>
    </div>
    <component v-else-if="currentComponent" :is="currentComponent" />
    <template v-else>
      <h1 class="text-3xl font-bold mb-6">
        {{ category?.title || "Kategoria" }}
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </template>
  </div>
</template>
