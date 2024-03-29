import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/HomeView.vue')
    },
    {
      path: '/vite',
      name: 'vite',
      component: () => import('./views/ViteView.vue')
   },
 ]
})
export default router