// src/mocks/services/newsService.ts

import type { Video } from '@/types/Video';
import { mockVideos } from '@/mocks/data/videos';

export const videosService = {
  getVideos: async (): Promise<Video[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockVideos;
  },

  getVideosByCategory: async (categoryId: number): Promise<Video[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockVideos.filter((video) => video.category.id === categoryId);
  },

  getHotVideos: async (): Promise<Video[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockVideos.filter((video) => video.isHot);
  },

  getFeaturedVideos: async (categoryId?: number): Promise<Video[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let featured = mockVideos.filter((video) => video.isFeatured);
    if (categoryId) {
      featured = featured.filter((video) => video.category.id === categoryId);
    }
    return featured;
  },

  getVideoById: async (id: number): Promise<Video | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockVideos.find((video) => video.id === id) || null;
  },

  getVideoBySlug: async (description: string): Promise<Video | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return (
      mockVideos.find((video) => video.description === description) || null
    );
  },

  getRelatedVideos: async (videoUrl: string): Promise<Video[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const currentVideo = mockVideos.find((video) => video.url === videoUrl);
    if (!currentVideo) return [];

    return mockVideos.filter(
      (video) =>
        video.url !== videoUrl &&
        video.category.id === currentVideo.category.id,
    );
  },
  getVideoByUrl: async (url: string): Promise<Video | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockVideos.find((video) => video.url === url) || null;
  },
};
