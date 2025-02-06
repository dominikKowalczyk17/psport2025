<script setup lang="ts">
import { RouterView } from "vue-router";
import LoadingOverlay from "@/components/shared/LoadingOverlay.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <LoadingOverlay />
  <Navbar />
  <RouterView />
</template>
