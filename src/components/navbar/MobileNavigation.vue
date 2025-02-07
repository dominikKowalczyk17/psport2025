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
}>();
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
          <button
            class="w-full py-4 flex items-center justify-between text-left"
            @click="emit('toggleSubmenu', item.id)"
          >
            <span class="text-base font-medium text-gray-800">
              {{ item.title }}
            </span>
            <ChevronDown
              v-if="item.submenu?.length"
              class="w-5 h-5 text-gray-400 transition-transform duration-200"
              :class="activeSubmenu === item.id ? 'rotate-180' : ''"
            />
          </button>

          <div
            v-if="item.submenu?.length"
            class="overflow-hidden transition-all duration-200"
            :class="activeSubmenu === item.id ? 'max-h-[70vh]' : 'max-h-0'"
          >
            <ul class="bg-gray-50 rounded-lg py-2 mb-2">
              <li v-for="subItem in item.submenu" :key="subItem.title">
                <a
                  :href="subItem.href"
                  class="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {{ subItem.title }}
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>
