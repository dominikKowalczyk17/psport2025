<script setup lang="ts">
import { Play, Eye, Calendar } from "lucide-vue-next";
import { formatDistanceToNow } from "date-fns";
import { pl } from "date-fns/locale";
import type { Category } from "@/types/Category";
import type { Author } from "@/types/Author";
import { formatDuration, formatViews } from "@/utils/dateFormatters";

interface Props {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number;
  publishDate: Date;
  category: Category;
  views: number;
  author: Author;
  tags: string[];
  isFeatured: boolean;
  isHot: boolean;
  size?: "normal" | "large";
}

const props = withDefaults(defineProps<Props>(), {
  size: "normal",
});
</script>

<template>
  <router-link
    :to="{ name: 'video', params: { url: url.replace('/', '') } }"
    :class="[
      'group relative bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg',
      size === 'large' ? 'col-span-2 row-span-2' : '',
    ]"
  >
    <div :class="['relative overflow-hidden', size === 'large' ? 'h-64' : 'h-48']">
      <img
        :src="thumbnailUrl || '/placeholder.svg'"
        :alt="title"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center"
      >
        <Play
          :class="[
            'text-white transition-transform duration-300 group-hover:scale-110',
            size === 'large' ? 'h-20 w-20' : 'h-16 w-16',
          ]"
        />
      </div>
      <div
        v-if="isHot"
        class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded"
      >
        HOT
      </div>
      <span
        class="absolute bottom-2 right-2 rounded bg-black bg-opacity-75 px-2 py-1 text-xs text-white"
      >
        {{ formatDuration(duration) }}
      </span>
    </div>
    <div class="p-4">
      <div class="mb-2 flex items-center space-x-2 text-xs text-gray-500">
        <span class="font-medium text-blue-600">{{ category.title }}</span>
        <span>•</span>
        <span class="flex items-center">
          <Calendar class="mr-1 h-3 w-3" />
          {{ formatDistanceToNow(publishDate, { addSuffix: true, locale: pl }) }}
        </span>
      </div>
      <h3
        :class="[
          'font-semibold text-gray-900 line-clamp-2 mb-2',
          size === 'large' ? 'text-xl' : 'text-lg',
        ]"
      >
        {{ title }}
      </h3>
      <p class="text-gray-600 text-sm mb-3 line-clamp-2">
        {{ description }}
      </p>
      <div class="flex justify-between items-center text-xs text-gray-500 mb-2">
        <span>{{ author.name }}</span>
        <span class="flex items-center">
          <Eye class="mr-1 h-3 w-3" />
          {{ formatViews(views) }} wyświetleń
        </span>
      </div>
      <div class="flex flex-wrap gap-1">
        <span
          v-for="(tag, index) in tags"
          :key="index"
          class="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </router-link>
</template>
