import type { News } from "@/types/News";

export const organizeNewsByCategory = (news: News[]): Record<string, News[]> => {
    return news.reduce((acc, newsItem) => {
      const categoryId = String(newsItem.category.id);
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
      acc[categoryId].push(newsItem);
      return acc;
    }, {} as Record<string, News[]>);
  };