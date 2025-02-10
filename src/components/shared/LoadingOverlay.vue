<!-- components/shared/LoadingOverlay.vue -->
<script setup lang="ts">
import { useLoadingStore } from "@/store/loadingStore";
const loadingStore = useLoadingStore();
</script>

<template>
  <div
    v-if="loadingStore.globalLoading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
    ></div>
  </div>
</template>
