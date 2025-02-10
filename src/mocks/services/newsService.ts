// src/mocks/services/newsService.ts
import type { News } from "@/types/News";
import { mockNews } from "../data/news";

export const newsService = {
  getNews: async (): Promise<News[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockNews;
  },

  getNewsByCategory: async (categoryId: number): Promise<News[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    try {
      return mockNews.filter((news) => {
        if (!news.category) {
          console.warn(`News ${news.id} nie ma przypisanej kategorii`);
          return false;
        }
        return news.category.id === categoryId;
      });
    } catch (error) {
      console.error("Błąd podczas filtrowania newsów:", error);
      return [];
    }
  },

  getHotNews: async (): Promise<News[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockNews.filter((news) => news.isHot);
  },

  getFeaturedNews: async (categoryId?: number): Promise<News[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let featured = mockNews.filter((news) => news.isFeatured);
    if (categoryId) {
      featured = featured.filter((news) => news.category.id === categoryId);
    }
    return featured;
  },

  getNewsById: async (id: number): Promise<News | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockNews.find((news) => news.id === id) || null;
  },

  getNewsBySlug: async (slug: string): Promise<News | null> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockNews.find((news) => news.slug === slug) || null;
  },

  getRelatedNews: async (newsId: number): Promise<News[]> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const currentNews = mockNews.find((news) => news.id === newsId);
    if (!currentNews) return [];

    return mockNews.filter(
      (news) =>
        news.id !== newsId && news.category.id === currentNews.category.id
    );
  },
};
