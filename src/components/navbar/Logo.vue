<script setup lang="ts">
import logoImage from "@/assets/logo.svg";

withDefaults(
  defineProps<{
    imgSrc?: string;
  }>(),
  {
    imgSrc: logoImage,
  }
);
</script>

<template>
  <div class="left-4 top-4 z-20">
    <router-link to="/" class="block transition-transform hover:scale-105">
      <img alt="polsatsport.pl" class="h-10 w-48" :src="imgSrc" />
    </router-link>
  </div>
</template>
