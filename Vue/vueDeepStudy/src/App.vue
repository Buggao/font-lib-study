<script setup>
import SonComponent from './components/SonComponent.vue';
const receiveMsg = (msg) => {console.log(msg)}
</script>

<template>
  <SonComponent msg="Vite + Vue" @who-am-i="receiveMsg"/>
</template>

<style scoped>
</style>
