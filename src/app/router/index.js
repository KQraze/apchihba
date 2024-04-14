import { createRouter, createWebHistory } from 'vue-router';

import { Routes } from '@/shared';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Routes.home.path,
      name: Routes.home.name,
      component: () => import('@/pages/home-page/HomePage.vue')
    }
  ]
});

export default router;
