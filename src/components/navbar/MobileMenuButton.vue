// components/navbar/MobileMenuButton.vue
<script setup lang="ts">
import { Menu, X } from "lucide-vue-next";

defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  (e: "toggle"): void;
}>();
</script>

<template>
  <button
    class="lg:hidden absolute right-4 top-4 z-[1002] p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
    @click="emit('toggle')"
    aria-label="Toggle menu"
  >
    <Menu v-if="!isOpen" class="w-6 h-6" />
    <X v-else class="w-6 h-6" />
  </button>
</template>
