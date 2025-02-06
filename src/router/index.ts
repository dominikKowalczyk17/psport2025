import { createRouter, createWebHistory } from 'vue-router';
import { useLoadingStore } from '@/store/loadingStore';
import { newsService } from '@/mocks/services/newsService';
import MainPage from '@/views/MainPage.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import NewsPage from '@/views/NewsPage.vue';

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
      props: (route) => ({
        categoryId: parseInt(route.params.id as string),
      }),
    },
    {
      path: '/news/:slug',
      name: 'news',
      component: NewsPage,
      async beforeEnter(to) {
        const allNews = await newsService.getNews();
        const news = allNews.find((n) => n.slug === to.params.slug);
        if (!news) {
          return { name: 'home' };
        }
        return true;
      },
      props: (route) => ({
        newsSlug: route.params.slug,
      }),
    },
    {
      path: '/video/:id',
      name: 'video',
      component: NewsPage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore();
  loadingStore.startLoading();
  next();
});

router.afterEach(() => {
  const loadingStore = useLoadingStore();
  setTimeout(() => loadingStore.stopLoading(), 500);
});

export default router;
