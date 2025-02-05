import type { Author } from './Author';
import type { Category } from './Category';

export interface News {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishDate: Date;
  modifiedDate?: Date;
  author: Author;
  category: Category;
  url: string,
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  isHot: boolean;
  isFeatured: boolean;
}

export interface NewsState {
  newsByCategory: Record<string, News[]>;
  hotNews: News[];
  featuredNews: Record<string, News[]>;
  currentNews: News | null;
  relatedNews: News[];
  loading: boolean;
  error: string | null;
}
