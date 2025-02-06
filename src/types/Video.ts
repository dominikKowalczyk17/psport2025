import type { Author } from './Author';
import type { Category } from './Category';

export interface Video {
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
}

export interface VideoState {
  videosByCategory: Record<string, Video[]>;
  featuredVideos: Record<string, Video[]>;
  currentVideo: Video | null;
  loading: boolean;
  error: string | null;
}
