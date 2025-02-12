import { createRouter, createWebHistory } from 'vue-router';
import { useLoadingStore } from '@/store/loadingStore';
import MainPage from '@/views/MainPage.vue';
import CategoryPage from '@/views/CategoryPage.vue';
import NewsPage from '@/views/NewsPage.vue';
import VideoPage from '@/views/VideoPage.vue';
import VideoTarget from '@/views/VideoTarget.vue';
import SubCategoryPage from '@/views/SubCategoryPage.vue';
import { categoryService } from '@/mocks/services/categoryService';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/kategoria/:href',
      name: 'category',
      component: CategoryPage,
      beforeEnter: async (to, from, next) => {
        const categories = await categoryService.getCategories();
        const category = categories.find((cat) => cat.href === to.params.href);
        if (category) {
          if (category.id === 1) {
            next({ name: 'videos' });
          } else {
            next();
          }
        } else {
          next({ name: 'home' });
        }
      },
      props: (route) => ({
        categoryHref: route.params.href,
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
    {
      path: '/:category/:subcategory',
      name: 'subCategory',
      component: SubCategoryPage,
      props: (route) => ({
        category: route.params.category,
        subCategory: route.params.subcategory,
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