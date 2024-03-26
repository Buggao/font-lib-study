<script setup lang="ts">
  import NavBar from './components/NavBar.vue';
  import ContentList from './components/ContentList.vue'
  import useStore from './store'
  import  {ref} from 'vue'

  const { channels } = useStore()
  console.log('channels', channels.channels)
  const demoNumber = ref<number>()
</script>

<template>
  <NavBar></NavBar>
  <p>{{demoNumber}}</p>
  <ContentList v-model="demoNumber"></ContentList>
</template>

<style scoped>
</style>
