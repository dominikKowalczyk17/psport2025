import type { Author } from "./Author";
import type { Category } from "./Category";

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
  subCategory?: {
    title: string;
    href: string;
  };
  url: string;
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  isHot: boolean;
  isFeatured: boolean;
  gallery?: NewsGalleryImage[];
  quotes?: NewsQuote[];
}

export interface NewsState {
  newsByCategory: Record<string, News[]>;
  newsBySubCategory: Record<string, News[]>;
  hotNews: News[];
  featuredNews: Record<string, News[]>;
  currentNews: News | null;
  relatedNews: News[];
  loading: boolean;
  error: string | null;
}

export interface NewsGalleryImage {
  thumbnail: string;
  full: string;
  caption: string;
}

export interface NewsQuote {
  text: string;
  author?: string;
  position?: string;
}
