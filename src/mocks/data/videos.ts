// src/mocks/data/videos.ts
import type { Video, VideoState } from '@/types/Video';
import { authors } from './authors';
import { categories } from './categories';

export const mockVideos: Video[] = [
  {
    id: 1,
    title: 'Niesamowite gole w Lidze Mistrzów!',
    description: 'Najpiękniejsze bramki fazy pucharowej Champions League.',
    url: 'champions-league-goals',
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
    url: 'f1-monaco',
    thumbnailUrl: '/placeholder.svg',
    duration: 450,
    publishDate: new Date('2025-02-06T16:30:00'),
    category: categories[0],
    views: 875000,
    author: authors[1],
    tags: ['Formuła 1', 'Grand Prix', 'Verstappen'],
    isFeatured: false,
    isHot: true,
  },
  {
    id: 3,
    title: 'Najlepsze zagrania NBA w sezonie 2025!',
    description: 'Top 10 akcji sezonu w najlepszej lidze koszykarskiej świata!',
    url: 'nba-top-plays',
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
    url: 'swiatek-wimbledon',
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
  {
    id: 5,
    title: 'Nowe technologie w motoryzacji 2025',
    description: 'Przegląd najnowszych innowacji w świecie motoryzacji.',
    url: 'car-tech-2025',
    thumbnailUrl: '/placeholder.svg',
    duration: 540,
    publishDate: new Date('2025-02-07T12:00:00'),
    category: categories[0],
    views: 650000,
    author: authors[1],
    tags: ['Motoryzacja', 'Technologie', 'Nowości'],
    isFeatured: false,
    isHot: false,
  },
  {
    id: 6,
    title: 'Zwycięstwo Polski w ME w siatkówce mężczyzn!',
    description: 'Polska - Rosja 3:1. Skrót meczu.',
    url: 'me-siatkowka-polska',
    thumbnailUrl: '/placeholder.svg',
    duration: 420,
    publishDate: new Date('2025-02-07T14:30:00'),
    category: categories[0],
    views: 980000,
    author: authors[2],
    tags: ['Siatkówka', 'ME', 'Polska'],
    isFeatured: false,
    isHot: true,
  },
  {
    id: 7,
    title: 'Najlepsze akcje z NBA All-Star Game 2025',
    description: 'Najlepsze momenty z meczu gwiazd NBA w Cleveland.',
    url: 'nba-all-star-2025',
    thumbnailUrl: '/placeholder.svg',
    duration: 360,
    publishDate: new Date('2025-02-07T18:00:00'),
    category: categories[0],
    views: 1320000,
    author: authors[0],
    tags: ['NBA', 'All-Star', 'Koszykówka'],
    isFeatured: true,
    isHot: false,
  },
  {
    id: 8,
    title: 'Najlepsze akcje z ME w siatkówce kobiet 2025',
    description: 'Najlepsze momenty z turnieju w Polsce.',
    url: 'me-siatkowka-kobiety',
    thumbnailUrl: '/placeholder.svg',
    duration: 480,
    publishDate: new Date('2025-02-07T20:30:00'),
    category: categories[0],
    views: 750000,
    author: authors[1],
    tags: ['Siatkówka', 'ME', 'Kobiety'],
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
