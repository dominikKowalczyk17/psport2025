// components/navbar/ProgressBar.vue
<script setup lang="ts">
defineProps<{
  progress: number;
}>();
</script>

<template>
  <div class="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
    <div
      class="h-full bg-blue-600 transition-all duration-300"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
