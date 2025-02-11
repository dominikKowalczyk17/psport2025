import { createRouter, createWebHistory } from 'vue-router';
import { useLoadingStore } from '@/store/loadingStore';
import { newsService } from '@/mocks/services/newsService';
import MainPage from '@/views/MainPage.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import VideoPage from '@/views/VideoPage.vue';
import VideoTarget from '@/views/VideoTarget.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryPage,
      beforeEnter: (to, from, next) => {
        const categoryId = parseInt(to.params.id as string);
        if (categoryId === 1) {
          next({ name: 'videos' });
        } else {
          next();
        }
      },
      props: (route) => ({
        categoryId: parseInt(route.params.id as string),
      }),
    },
    {
      path: '/news/:slug',
      name: 'news',
      component: NewsPage,
      props: (route) => ({
        newsSlug: route.params.slug,
      }),
    },
    {
      path: '/video',
      name: 'videos',
      component: VideoPage,
    },
    {
      path: '/video/:id',
      name: 'video',
      component: VideoTarget,
      props: (route) => ({
        videoId: parseInt(route.params.id as string),
      }),
    },
  ],
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  // Dodaj małe opóźnienie, żeby uniknąć migotania podczas szybkich przejść
  setTimeout(() => {
    loadingStore.stopLoading();
  }, 500);
});

export default router;