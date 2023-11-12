<template>
    <div class="home-page">
        <h1 :content="objVeriable">demo view</h1>
        <div :bind-value="bindValue">bind string</div>
        <div :value="bindNull">bind null</div>
        <div :value="bindObj">bind object</div>
        <input v-bind="inputObj">
        <input v-bind="inputObj" type="number">
    </div>
</template>
  
<script setup>
let bindValue = 'bind String'
let bindNull = ''
let bindObj = {a:'a', b:'b'}
let inputObj = {name:"user-name", type: 'text', placeholder:'please input your name'}
</script>
  
<style>
.home-page {
    flex-direction: column;
}
</style>