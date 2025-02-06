<script setup lang="ts">
import { RouterView, useRoute } from "vue-router";
import LoadingOverlay from "@/components/shared/LoadingOverlay.vue";
import Navbar from "@/components/Navbar.vue";
import { provide, ref, watch } from "vue";

const route = useRoute();
const articleTitle = ref<string | undefined>(undefined);
const readingProgress = ref(0);

provide("articleTitle", articleTitle);
provide("readingProgress", readingProgress);

watch(
  () => route.path,
  () => {
    articleTitle.value = undefined;
    readingProgress.value = 0;
  }
);
</script>

<template>
  <LoadingOverlay />
  <Navbar :articleTitle="articleTitle" :readingProgress="readingProgress" />
  <RouterView />
</template>
