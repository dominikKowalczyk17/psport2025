<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import CategorySection from "@/components/CategorySection.vue";
import type { Category } from "@/types/Category";
import { categoryService } from "@/mocks/services/categoryService";
import HotNews from "@/components/HotNews.vue";

const categories = ref<Category[]>([]);
const error = ref<string | null>(null);

// Znajdujemy kategorię wideo (id: 1)
const videoCategory = computed(() =>
  categories.value.find((cat) => cat.id === 1)
);

// Filtrujemy kategorie newsów (wszystkie oprócz wideo)
const newsCategories = computed(() =>
  categories.value.filter((cat) => cat.id !== 1)
);

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
  <main class="container relative float-left w-full overflow-hidden">
    <section class="inside mx-auto max-w-[1280px] mt-[10px] px-[30px]">
      <!-- Error state -->
      <div v-if="error" class="text-red-500 p-4">
        {{ error }}
      </div>

      <!-- Content -->
      <template v-else>
        <HotNews />
        <!-- Video sections -->
        <CategorySection
          v-if="videoCategory"
          :category="videoCategory"
          title="Polecane Wideo"
        />
        <!-- News sections -->
        <CategorySection
          v-for="category in newsCategories"
          :key="category.id"
          :category="category"
        />
      </template>
    </section>
  </main>
</template>
