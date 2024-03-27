import { createRouter, createWebHistory } from  'vue-router'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import("../src/views/Home.vue"),
    }, 
    {
        path: '/vitevue',
        name: 'vitevue',
        component: () => import("../src/views/ViteVue.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routers: routes
})

export default router