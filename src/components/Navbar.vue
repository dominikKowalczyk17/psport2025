<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowUpIcon, Menu, X, ChevronDown } from "lucide-vue-next";
import { categoryService } from "../mocks/services/categoryService";
import type { Category } from "../types/Category";

const props = defineProps<{
  articleTitle?: string;
  readingProgress?: number;
}>();

const menuItems = ref<Category[]>([]);
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);
const isSubmenuOpen = ref<number | null>(null);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
    isSubmenuOpen.value = null;
  }
};

const toggleSubmenu = (categoryId: number) => {
  isSubmenuOpen.value = isSubmenuOpen.value === categoryId ? null : categoryId;
};

onMounted(async () => {
  try {
    menuItems.value = await categoryService.getCategories();
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    console.error("Błąd w pobieraniu kategorii:", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-[1000] w-full transform-gpu shadow-[0_-3px_0_#fff] bg-white transition-all duration-300"
    :class="[
      isScrolled
        ? 'h-[65px]'
        : 'h-[calc(var(--header-main-height)+var(--header-sub-height))]',
      { 'h-screen': isMobileMenuOpen },
    ]"
    :style="{
      '--header-main-height': '65px',
      '--header-sub-height': '45px',
    }"
  >
    <div class="relative h-full">
      <!-- Logo -->
      <div class="logo absolute left-4 top-4 z-20">
        <router-link to="/">
          <img
            alt="polsatsport.pl"
            class="h-[42px] w-[201px]"
            src="../assets/logo.svg"
          />
        </router-link>
      </div>

      <!-- Hamburger Button -->
      <button
        class="lg:hidden absolute right-4 top-4 z-[1002] p-2 hover:bg-gray-100 rounded-lg transition-colors"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
        <X v-else class="w-6 h-6" />
      </button>

      <!-- Tytuł artykułu (desktop) -->
      <div
        v-if="articleTitle && !isMobileMenuOpen"
        class="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
        :class="isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <h1 class="text-xl font-bold text-gray-800 truncate max-w-[500px]">
          {{ articleTitle }}
        </h1>
      </div>

      <!-- Przycisk scroll to top (desktop) -->
      <button
        v-if="articleTitle && !isMobileMenuOpen"
        @click="scrollToTop"
        class="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800 transition-all duration-300"
        :class="isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      >
        <ArrowUpIcon class="w-6 h-6" />
      </button>

      <!-- Desktop Navigation -->
      <nav
        class="hidden lg:block nav--main absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full pl-[240px] pr-[50px] transition-all duration-300"
        :class="isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'"
      >
        <ul class="flex gap-2">
          <li v-for="item in menuItems" :key="item.id" class="relative group">
            <a class="px-3 py-2 hover:text-blue-500 cursor-pointer font-bold">
              {{ item.title }}
            </a>
            <div
              class="absolute top-full left-0 w-60 bg-white shadow-xl hidden group-hover:block pt-4"
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

      <!-- Mobile Menu -->
      <Transition name="fade">
        <div
          v-if="isMobileMenuOpen"
          class="fixed inset-0 bg-white z-[1001] lg:hidden overflow-y-auto pt-20"
        >
          <!-- Mobile Menu Items -->
          <nav class="container mx-auto py-6">
            <ul class="space-y-4">
              <li v-for="item in menuItems" :key="item.id">
                <div class="relative">
                  <button
                    class="w-full px-4 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    @click="toggleSubmenu(item.id)"
                  >
                    <span class="text-lg font-bold">{{ item.title }}</span>
                    <ChevronDown
                      class="w-6 h-6 transition-transform duration-200"
                      :class="isSubmenuOpen === item.id ? 'rotate-180' : ''"
                    />
                  </button>

                  <!-- Mobile Submenu -->
                  <div
                    v-if="item.submenu"
                    class="overflow-hidden transition-all duration-300"
                    :class="
                      isSubmenuOpen === item.id ? 'max-h-[70vh]' : 'max-h-0'
                    "
                  >
                    <ul class="bg-gray-50">
                      <li v-for="subItem in item.submenu" :key="subItem.title">
                        <a
                          class="block px-8 py-3 text-base hover:bg-gray-100 transition-colors"
                          :href="subItem.href"
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
        </div>
      </Transition>

      <!-- Pasek postępu czytania -->
      <div
        v-if="articleTitle && !isMobileMenuOpen"
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
      paddingTop:
        isScrolled && !isMobileMenuOpen
          ? '65px'
          : 'calc(var(--header-main-height) + var(--header-sub-height))',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
