<template>
  <div class="home-page">
      <button @click="changeStatus">change status</button>
      <div :class="divActive" class="status-block ">active</div>
  </div>
</template>

<script setup>
import {ref, reactive } from 'vue'
const divActive = reactive({
  'active-status':false,
  'gold-text': false
})
function changeStatus(){
  console.log('changeStatus is running')
  divActive['active-status'] = !divActive['active-status'] 
  divActive['gold-text'] = !divActive['gold-text'] 
}
</script>

<style>
.home-page {
  display: flex;
  padding: 20px 0;
  align-items: center;
  flex-direction: column;
}

.gold-text {
  font-weight: 700;
  color: #b9990b;
}

.status-block {
  width: 120px;
  height: 30px;
  margin-top: 15px;
  text-align: center;
}
</style>