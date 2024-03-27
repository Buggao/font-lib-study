import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({ 
  base: 'http://localhost:5173/',
  server:{
    port: 5173
  },
  plugins: [
    vue(),
    qiankun('subVue', {
      useDevMode: true
    })
  ],
})
