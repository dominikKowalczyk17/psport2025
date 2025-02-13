// src/store/videoStore.ts
import { defineStore } from 'pinia';
import type { Video, VideoState } from '@/types/Video';
import { videosService } from '@/mocks/services/videosService';

export const useVideoStore = defineStore('videos', {
  state: (): VideoState => ({
    videosByCategory: {},
    featuredVideos: {},
    currentVideo: null,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchCurrentVideo(videoId: number): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const video = await videosService.getVideoById(videoId);
        if (video) {
          // Add placeholder video URL if not present
          this.currentVideo = {
            ...video,
            url:
              video.url ||
              'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            thumbnailUrl:
              video.thumbnailUrl ||
              'https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
          };
        } else {
          throw new Error('Video not found');
        }
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : 'Problem with fetching video';
        this.currentVideo = null;
      } finally {
        this.loading = false;
      }
    },
    async fetchVideoByUrl(url: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const video = await videosService.getVideoByUrl(url);
        if (video) {
          this.currentVideo = {
            ...video,
            thumbnailUrl: video.thumbnailUrl || '/placeholder.svg',
          };
        } else {
          throw new Error('Video not found');
        }
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : 'Problem with fetching video';
        this.currentVideo = null;
      } finally {
        this.loading = false;
      }
    },
  },

  getters: {
    isLoading: (state): boolean => state.loading,
    hasError: (state): boolean => state.error !== null,
    getError: (state): string | null => state.error,
  },
});
