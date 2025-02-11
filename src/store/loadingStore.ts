// src/store/loadingStore.ts
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    globalLoading: false,
    loadingCount: 0,
  }),
  actions: {
    startLoading() {
      this.loadingCount++;
      this.globalLoading = true;
    },
    stopLoading() {
      this.loadingCount--;
      if (this.loadingCount <= 0) {
        this.loadingCount = 0;
        this.globalLoading = false;
      }
    },
  },
});
