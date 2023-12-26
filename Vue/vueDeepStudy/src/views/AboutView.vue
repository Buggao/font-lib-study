<template>
  <div class="home-page">
    <h1>about view</h1>
    <FancyItem v-bind="childrenProps" @select-size="callBack" data-demo="demo"/>
    <div> <span>children size is</span> <span>{{ childrenSelect }}</span></div>
    <button @click="changeName">change name</button>
  </div>
</template>

<script setup>
  import FancyItem from '../components/fancy-item.vue'
  import { ref } from 'vue'
  const childrenSelect = ref(void(0))
  let childrenName = ref('FancyItem')
  let childrenProps = {
    ["component-name"]: childrenName,
    ["component-content"]: "32"
  }
  function changeName() {
    console.log('change name is runing')
    childrenName.value = 'u are my children'
  }
  function callBack(value){
    console.log('callback value is', value)
    childrenSelect.value = value
  }
</script>

<style>
.choose-box {
  display: flex;
  justify-content: center;
  align-items: center;
}

.size-box{
  min-width: 2rem;
  text-align: center;
  padding: 3px;
  border: 1px solid #777;
  margin: 10px;
}

.active {
  background: #03bd7e;
  color: #eee;
}
</style>