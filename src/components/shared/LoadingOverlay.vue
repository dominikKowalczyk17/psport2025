<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useLoadingStore } from "@/store/loadingStore";
import LoadingSpinner from "./LoadingSpinner.vue";

const store = useLoadingStore();
const { isLoading } = storeToRefs(store);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-50 bg-black bg-opacity-25 flex items-center justify-center"
    >
      <LoadingSpinner height="h-24" />
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
