<template>
  <div class="home-page">
    <h1>home view</h1>
    <!-- <PersonInfo v-model="phoneInfo"></PersonInfo> -->
    <div class="info-container">
      <span>home view component data:</span>
      <div class="info-show-line">
        <span>phoneInfo.phoneNumber:</span>
        <span>{{phoneInfo.phoneNumber }}</span>
      </div>
      <div class="info-show-line">
        <span>zipCode:</span>
        <span>{{zipCode }}</span>
      </div>
    </div>
    <input type="text" v-model="alinkContent" placeholder="111">
    <div>{{ htmlContent }}</div>
    <div><a v-html="htmlContent"></a></div>
    <div>{{ alinkContent }}</div>
  </div>
</template>

<script setup>
  // import PersonInfo from '../components/person-info.vue'
  let phoneInfo = {areaCode: ['+86','+10'],phoneNumber:''}
  let zipCode = ""
  let alinkContent = "click Here"
  let htmlContent = `<a>${alinkContent}</a>`
</script>

<style>
  .home-page {
    flex-direction: column;
  }
  .info-container{
    margin-top: 18px;
  }
  .info-show-line {
    padding-left: 40px;
  }
</style>