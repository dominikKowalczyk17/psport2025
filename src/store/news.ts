import { defineStore } from "pinia";
import type { News, NewsState } from "@/types/News";

export const useNewsStore = defineStore('news', {
  state: (): NewsState => ({
    newsByCategory: {},
    newsBySubCategory: {},
    hotNews: [],
    featuredNews: {},
    currentNews: null,
    relatedNews: [],
    loading: false,
    error: null,
  }),

  actions: {
    // async fetchNewsByCategory(category: string): Promise<void> {
    //   this.loading = true;
    //   try {
    //     const response = await api.getNewsByCategory(category);
    //     this.newsByCategory[category] = response.data;
    //   } catch (error) {
    //     this.error = error instanceof Error ? error.message : 'Unknown error';
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    async fetchCurrentNews(newsId: number): Promise<void> {
      // implementacja
    },

    setCurrentNews(news: News): void {
      this.currentNews = news;
    },
  },

  getters: {
    getNewsByCategory: (state: NewsState) => {
      return (category: string): News[] => {
        return state.newsByCategory[category] || [];
      };
    },

    getFeaturedNewsByCategory: (state: NewsState) => {
      return (category: string): News[] => {
        return state.featuredNews[category] || [];
      };
    },

    isNewsLoading(): boolean {
      return this.loading;
    },

    getNewsBySubCategory: (state: NewsState) => {
      return (category: string, subcategoryHref: string): News[] => {
        const categoryNews = state.newsByCategory[category] || [];
        return categoryNews.filter(
          (news) => news.subCategory?.href === subcategoryHref,
        );
      };
    },
  },
});
