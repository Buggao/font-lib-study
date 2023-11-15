<template>
    <div class="home-page">
        <h1 :content="objVeriable">demo view</h1>
        <div :bind-value="bindValue">bind string</div>
        <div :value="bindNull">bind null</div>
        <div :value="bindObj">bind object</div>
        <input v-bind="inputObj">
        <br/><br/>
        <button @click="changeStatus">change status</button>
        <div :class="{ 'active-status': divActive}" class="status-block">active</div>
    </div>
</template>
  
<script setup>
import {ref, computed } from 'vue'
let bindValue = 'bind String'
let bindNull = ''
let bindObj = {a:'a', b:'b'}
let inputObj = {
    name:"user-name", 
    type: 'text', 
    placeholder:'please input your name'
    }
let divActive = ref(false)
function changeStatus(){
    console.log('changeStatus is running')
    divActive.value = !divActive.value
}
</script>
  
<style>
.home-page {
    flex-direction: column;
}
.status-block{
    width: 120px;
    height: 30px;
    margin-top: 15px;
}
</style>