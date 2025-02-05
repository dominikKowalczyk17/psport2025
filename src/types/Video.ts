import type { Category } from './Category';

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  duration: number; // w sekundach
  publishDate: Date;
  category: Category;
  views: number;
}

export interface VideoState {
  videosByCategory: Record<string, Video[]>;
  featuredVideos: Record<string, Video[]>;
  currentVideo: Video | null;
  loading: boolean;
  error: string | null;
}
