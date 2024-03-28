import { createApp } from 'vue'
import './style.css'
import router from "./router";
import App from './App.vue'


console.log('in vite main', window.$wujie)
createApp(App).use(router).mount('#app')
