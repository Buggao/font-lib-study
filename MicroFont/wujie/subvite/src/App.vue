<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="nav-box">
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
  </div>
  <router-view></router-view>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.nav-box {
  display: flex;
  gap: 20px;
}
</style>
