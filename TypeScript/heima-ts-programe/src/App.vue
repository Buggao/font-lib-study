<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import ContentList from './components/ContentList.vue'
  import useStore from './store'

  const { channels } = useStore()
  console.log('channels', channels.channels)
</script>

<template>
  <NavBar></NavBar>
  <ContentList></ContentList>
</template>

<style scoped>
</style>
