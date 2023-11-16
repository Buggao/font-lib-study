<template>
  <div class="home-page">
    <button @click="changeStatus">change status</button>
    <div :style="{ color: colorStyle, fontSize: '20px' }">normal style</div>
    <div :style="[isGolden ? 'color:#b9990b' : '', 'font-size:20px']">array style</div>
    <div :style="[fontStyle, layoutStyle]">arrayObject style</div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const colorStyle = "#b9990b"
const isGolden = ref(false)
const fontStyle = {
  fontSize: '20px',
  fontWeight: '700',
  color: '#b9990b'
}
const layoutStyle = {
  width: '180px',
  height: '30px',
  textAlign: "center"
}
function changeStatus() {
  console.log('changeStatus is running')
  isGolden.value = !isGolden.value
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