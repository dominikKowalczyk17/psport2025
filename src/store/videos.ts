import { defineStore } from "pinia";
import type { Video, VideoState, } from "../types/Video";

export const useVideoStore = defineStore('videos', {
  state: (): VideoState => ({
    videosByCategory: {},
    featuredVideos: {},
    currentVideo: null,
    loading: false,
    error: null
  }),
  actions: {
    async fetchNewsByCategory(category: string): Promise<void> {
      this.loading = true;
      try {
        const response = await api.getNewsByCategory(category);
        this.videosByCategory[category] = response.data;
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Problem with fetching videos';
      } finally {
        this.loading = false;
      }
    },

    async fetchCurrentNews(videoId: number): Promise<void> {
      // implementacja
    },

    setCurrentNews(video: Video): void {
      this.currentVideo = video;
    }
  },
  getters: {
    getVideosByCategory: (state: VideoState) => {
      return (category: string): Video[] => {
        return state.videosByCategory[category] || [];
      };
    },

    getFeaturedVideosByCategory: (state: VideoState) => {
      return (category: string): Video[] => {
        return state.featuredVideos[category] || [];
      };
    },

    isVideoLoading(): boolean {
      return this.loading;
    }
  }
});