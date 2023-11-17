<template>
  <div class="home-page">
    <button @click="changeStatus" class="btntext">change status</button>
    <div v-if="ifDiv">v-if</div>
    <div v-show="showDiv">v-show</div>
    <div>css</div>
    <div>foot line</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const ifDiv = ref(false)
const showDiv = ref(false)
function changeStatus() {
  console.log('changeStatus is running')
  ifDiv.value = !ifDiv.value
  showDiv.value = !showDiv.value
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
.btntext, .btnDemo{
  border-radius: 8px;
}
</style>