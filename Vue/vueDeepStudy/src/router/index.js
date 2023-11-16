import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import styleBind from '../views/template/stylebind.vue'
import classBind from '../views/template/classbind.vue'
import listRending from '../views/template/listRending.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/DemoView.vue'),
      children:[   
        { path: 'class', name: 'class', component: classBind },
        { path: 'style', name: 'style', component: styleBind },
        { path: 'list', name: 'list', component: listRending },
      ]
    }
  ]
})

export default router
