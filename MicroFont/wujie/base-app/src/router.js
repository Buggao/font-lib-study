import { createRouter, createWebHistory } from  'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import("../src/views/Home.vue"),
    }, 
    {
        path: '/vite',
        name: 'vite',
        component: () => import("../src/views/ViteVue.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router