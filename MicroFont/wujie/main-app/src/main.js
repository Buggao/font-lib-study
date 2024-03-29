import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

import WujieVue from 'wujie-vue3'
import { setupApp, preloadApp } from "wujie"
import lifecycles from './lifecycle'

setupApp({
    name: '/vite',
    url: '//localhost:5173/',
    exec: true,
    sync: true,
    alive: true,
    ...lifecycles
})

const mainApp = createApp(App)
mainApp.use(WujieVue).use(router).mount('#app')

preloadApp({name:'/vite'})
