<script setup>
import { ref } from 'vue'
import SonComponent from './components/SonComponent.vue';
const receiveMsg = (msg) => {console.log(msg)}
const data = ref({number:1})
const changeData = (changeType) => {
  console.log('changeType',changeType)
  if(changeType == 'add') {
    data.value.number = data.value.number + 0.1 
  } else if(changeType == 'sub') {
    data.value.number = data.value.number - 0.1 
  }
}
</script>

<template>
  <p>{{ data.number }}</p>
  <SonComponent :numberData="data" @changeData="changeData" />
</template>

<style scoped>
</style>
 
