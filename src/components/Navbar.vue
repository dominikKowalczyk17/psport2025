<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUpIcon } from "lucide-vue-next";
import { categoryService } from "../mocks/services/categoryService";
import type { Category } from "../types/Category";

const props = defineProps<{
  articleTitle?: string;
  readingProgress?: number;
}>();

const isAMP = false;
const menuItems = ref(<Category[]>[]);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(async () => {
  try {
    menuItems.value = await categoryService.getCategories();
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    throw new Error("Błąd w pobieraniu kategorii");
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-[2] w-full transform-gpu shadow-[0_-3px_0_#fff] bg-white transition-all duration-300"
    :class="
      isScrolled
        ? 'h-[65px]'
        : 'h-[calc(var(--header-main-height)+var(--header-sub-height))]'
    "
    :style="{
      '--header-main-height': '65px',
      '--header-sub-height': '45px',
    }"
  >
    <div class="relative h-full">
      <!-- Logo -->
      <div class="logo absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <router-link to="/">
          <img
            alt="polsatsport.pl"
            class="h-[42px] w-[201px]"
            src="../assets/logo.svg"
          />
        </router-link>
      </div>

      <!-- Tytuł artykułu -->
      <div
        v-if="articleTitle"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        :class="isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <h1 class="text-xl font-bold text-gray-800 truncate max-w-[500px]">
          {{ articleTitle }}
        </h1>
      </div>

      <!-- Przycisk scroll to top -->
      <button
        v-if="articleTitle"
        @click="scrollToTop"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-all duration-300"
        :class="isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <ArrowUpIcon class="w-6 h-6" />
      </button>

      <!-- Nawigacja główna -->
      <nav
        class="nav--main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pl-[240px] pr-[50px] transition-all duration-300"
        :class="isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      >
        <ul class="flex gap-2">
          <li v-for="item in menuItems" :key="item.id" class="relative group">
            <input
              :id="`nav_${item.id}`"
              type="checkbox"
              class="sr-only peer"
            />
            <a class="px-3 py-2 hover:text-blue-500 cursor-pointer font-bold">
              {{ item.title }}
            </a>
            <div
              class="absolute top-full left-0 w-60 bg-white shadow-xl hidden group-hover:block peer-checked:block pt-4"
            >
              <div class="max-h-[60vh] overflow-y-auto">
                <ul>
                  <li v-for="subItem in item.submenu" :key="subItem.title">
                    <a
                      class="px-4 py-2 cursor-pointer hover:bg-gray-200 hover:text-blue-700 block font-bold text-sm"
                    >
                      {{ subItem.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Pasek postępu czytania -->
      <div
        v-if="articleTitle"
        class="absolute bottom-0 left-0 w-full h-1 bg-gray-200"
      >
        <div
          class="h-full bg-blue-600 transition-all duration-300"
          :style="{ width: `${readingProgress || 0}%` }"
        />
      </div>
    </div>
  </header>

  <!-- Padding pod headerem -->
  <div
    :style="{
      paddingTop: isScrolled
        ? '65px'
        : 'calc(var(--header-main-height) + var(--header-sub-height))',
    }"
  >
    <slot></slot>
  </div>
</template>
