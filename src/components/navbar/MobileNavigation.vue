// components/navbar/MobileNavigation.vue
<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import type { Category } from "@/types/Category";

defineProps<{
  items: Category[];
  isOpen: boolean;
  activeSubmenu: number | null;
}>();

const emit = defineEmits<{
  (e: "toggleSubmenu", id: number): void;
  (e: "closeMenu"): void;
}>();

const closeMenu = () => {
  emit("closeMenu");
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-white z-[1001] lg:hidden overflow-y-auto"
    style="top: 64px"
  >
    <nav class="container mx-auto py-4 px-4">
      <ul class="space-y-2">
        <li
          v-for="item in items"
          :key="item.id"
          class="border-b border-gray-100 last:border-none"
        >
          <div class="flex items-center justify-between">
            <router-link
              :to="{ name: 'category', params: { href: item.href } }"
              class="block py-4 text-base font-medium text-gray-800 flex-1"
              @click.native="closeMenu"
            >
              {{ item.title }}
            </router-link>
            <button
              v-if="item.submenu?.length"
              class="py-4 text-left"
              @click="emit('toggleSubmenu', item.id)"
            >
              <ChevronDown
                class="w-5 h-5 text-gray-400 transition-transform duration-200"
                :class="activeSubmenu === item.id ? 'rotate-180' : ''"
              />
            </button>
          </div>

          <div
            v-if="item.submenu?.length"
            class="overflow-hidden transition-all duration-200"
            :class="activeSubmenu === item.id ? 'max-h-[70vh]' : 'max-h-0'"
          >
            <ul class="bg-gray-50 rounded-lg py-2 mb-2">
              <li v-for="subItem in item.submenu" :key="subItem.title">
                <router-link
                  :to="{
                    name: 'subCategory',
                    params: {
                      category: item.href,
                      subcategory: subItem.href,
                    },
                  }"
                  class="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                  @click.native="closeMenu"
                >
                  {{ subItem.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
