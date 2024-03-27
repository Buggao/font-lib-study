<script setup>
import { ref } from 'vue'
import SonComponent from './components/SonComponent.vue';
const receiveMsg = (msg) => {console.log(msg)}
const listData = ref([{id:1, number:1},{id:2, number:1},{id:3, number:1},{id:4, number:1}])
const changeData = (changeType,index) => {
  console.log('changeType',changeType,index)
  if(changeType == 'add'){
    listData.value[index].number += 1
  }else if(changeType == 'sub'){
    listData.value[index].number -= 1
  }
}
</script>

<template>
  <SonComponent :listData="listData" @changeData="changeData" />
</template>

<style scoped>
</style>
 
