<script setup lang="ts">
import { onMounted, ref } from "vue";
import CategorySection from "@/components/CategorySection.vue";
import type { Category } from "@/types/Category";
import { categoryService } from "@/mocks/services/categoryService";

const categories = ref<Category[]>([]);
const error = ref<string | null>(null);

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
      <div v-if="error" class="text-red-500 p-4">
        {{ error }}
      </div>
      <template v-else>
        <CategorySection
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </template>
    </section>
  </main>
</template>
