<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const app = 'App.vue'

const receiveMessage:(msg:string) => void = msg => {
  console.log(msg)
}
</script>

<template>
  <div class="logo">
    <h1 class="vue">
      {{ app }}
    </h1>
    <HelloWorld  msg="vue3 + vite + ts" @say-my-name="receiveMessage"/>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
