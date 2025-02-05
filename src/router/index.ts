import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import CategoryPage from '@/views/CategoryPage.vue'
import NewsPage from '@/views/NewsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryPage
    },
    {
      path: '/news/:id',
      name: 'news',
      component: NewsPage
    }
  ]
})

export default router