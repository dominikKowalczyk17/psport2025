// components/navbar/DesktopNavigation.vue
<script setup lang="ts">
import type { Category } from "@/types/Category";

defineProps<{
  items: Category[];
  isScrolled: boolean;
}>();
</script>

<template>
  <nav>
    <ul class="flex items-center gap-1">
      <li v-for="item in items" :key="item.id" class="relative group">
        <router-link
          class="block px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
          :to="
            item.id === 1
              ? { name: 'videos' }
              : { name: 'category', params: { id: item.id } }
          "
        >
          {{ item.title }}
        </router-link>

        <!-- Submenu -->
        <div
          v-if="item.submenu?.length"
          class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[240px]"
        >
          <div class="bg-white rounded-lg shadow-xl overflow-hidden">
            <ul class="py-1">
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
                >
                  {{ subItem.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>
