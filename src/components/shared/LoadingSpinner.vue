//src/components/shared/LoadingSpinner.vue

<script setup lang="ts">
interface Props {
  height?: string;
}

withDefaults(defineProps<Props>(), {
  height: "h-96",
});
</script>

<template>
  <div :class="['flex justify-center items-center', height]">
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
    ></div>
  </div>
</template>
