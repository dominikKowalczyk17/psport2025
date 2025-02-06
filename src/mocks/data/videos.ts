// src/mocks/data/videos.ts
import type { Video, VideoState } from '@/types/Video';
import { authors } from './authors';
import { categories } from './categories';

export const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Niesamowite gole w Lidze Mistrzów!',
    description: 'Najpiękniejsze bramki fazy pucharowej Champions League.',
    url: '/videos/champions-league-goals',
    thumbnailUrl: '/placeholder.svg',
    duration: 320,
    publishDate: new Date('2025-02-06T18:00:00'),
    category: categories[0],
    views: 1520000,
    author: authors[0],
    tags: ['Liga Mistrzów', 'Gole', 'Piłka Nożna'],
    isFeatured: true,
    isHot: true,
  },
  {
    id: 2,
    title: 'Za kulisami F1: Grand Prix Monako',
    description: 'Ekskluzywne ujęcia i wywiady z kierowcami F1 w Monako.',
    url: '/videos/f1-monaco',
    thumbnailUrl: '/placeholder.svg',
    duration: 450,
    publishDate: new Date('2025-02-06T16:30:00'),
    category: categories[0],
    views: 875000,
    author: authors[1],
    tags: ['F1', 'Grand Prix', 'Verstappen'],
    isFeatured: false,
    isHot: true,
  },
  {
    id: 3,
    title: 'Najlepsze zagrania NBA w sezonie 2025!',
    description: 'Top 10 akcji sezonu w najlepszej lidze koszykarskiej świata!',
    url: '/videos/nba-top-plays',
    thumbnailUrl: '/placeholder.svg',
    duration: 600,
    publishDate: new Date('2025-02-06T20:45:00'),
    category: categories[0],
    views: 1250000,
    author: authors[2],
    tags: ['NBA', 'Dunki', 'Koszykówka'],
    isFeatured: true,
    isHot: false,
  },
  {
    id: 4,
    title: 'Wielkie zwycięstwo Igi Świątek na Wimbledonie!',
    description:
      'Finałowy mecz Świątek przeciwko Naomi Osace - kluczowe momenty.',
    url: 'videos/swiatek-wimbledon',
    thumbnailUrl: '/placeholder.svg',
    duration: 480,
    publishDate: new Date('2025-02-06T17:15:00'),
    category: categories[0],
    views: 1045000,
    author: authors[0],
    tags: ['Wimbledon', 'Iga Świątek', 'Tenis'],
    isFeatured: true,
    isHot: true,
  },
];

export const initialState: VideoState = {
  videosByCategory: {},
  featuredVideos: {},
  currentVideo: null,
  loading: false,
  error: null,
};
