// components/navbar/Navbar.vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { categoryService } from "@/mocks/services/categoryService";
import type { Category } from "@/types/Category";
import Logo from "./Logo.vue";
import ProgressBar from "./ProgressBar.vue";
import MobileMenuButton from "./MobileMenuButton.vue";
import DesktopNavigation from "./DesktopNavigation.vue";
import MobileNavigation from "./MobileNavigation.vue";
import ArticleHeader from "./ArticleHeader.vue";

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
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
  isSubmenuOpen.value = null;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

const toggleSubmenu = (categoryId: number) => {
  isSubmenuOpen.value = isSubmenuOpen.value === categoryId ? null : categoryId;
};

onMounted(async () => {
  try {
    menuItems.value = await categoryService.getCategories();
    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<template>
  <header
    class="fixed top-0 left-0 z-[1000] w-full bg-white shadow-lg transition-all duration-300"
    :class="[isScrolled ? 'h-16' : 'h-20', { 'h-screen': isMobileMenuOpen }]"
  >
    <div class="relative h-full justify-items-center max-w-[1920px] mx-auto px-4">
      <div class="flex items-center justify-between h-full">
        <div class="flex items-center space-x-8">
          <Logo />

          <DesktopNavigation
            :items="menuItems"
            :is-scrolled="isScrolled"
            class="hidden lg:block cursor-pointer"
          />
        </div>

        <div class="flex items-center space-x-4">
          <ArticleHeader
            v-if="articleTitle"
            :title="articleTitle"
            :is-scrolled="isScrolled"
            @scroll-top="scrollToTop"
            class="hidden lg:flex"
          />

          <MobileMenuButton
            :is-open="isMobileMenuOpen"
            @toggle="toggleMobileMenu"
            class="lg:hidden"
          />
        </div>
      </div>

      <MobileNavigation
        :items="menuItems"
        :is-open="isMobileMenuOpen"
        :active-submenu="isSubmenuOpen"
        @toggle-submenu="toggleSubmenu"
        @close-menu="closeMobileMenu"
      />

      <ProgressBar v-if="articleTitle" :progress="readingProgress || 0" />
    </div>
  </header>

  <div :class="['transition-all duration-300', isScrolled ? 'pt-16' : 'pt-20']">
    <slot></slot>
  </div>
</template>
