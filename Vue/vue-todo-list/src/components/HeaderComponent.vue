<script setup>
import { ref, reactive } from 'vue';
const emit = defineEmits(['addItem'])
  const newTodo = ref('')
const handleClick = (param,param1) => {(
    console.log(`${param}th box is clicked`,param1)
)}
const testObj = ref({name:'isGolden',age:1})
let demoObj = reactive({name:'ton',age:23})
function setData(){
  demoObj = testObj
  testObj.value = {name:'isGolden',age:2}
  // Object.assign(demoObj,{company:'dance'})
}
</script>

<template>
  <h1 class="logo">To Do List</h1>
  <hr/>
  <input 
    v-model=newTodo
    type="text" placeholder="请输入新的To do项，回车新增" 
    class="todo-input" @keydown.enter="($emit('addItem',newTodo), newTodo='')">
  <button @click="setData">setData</button>
  <button @click="Object.assign(demoObj,{company:'dance'})">changeData</button>
  <div v-for="item in demoObj">{{item}}</div>
  <div v-for="item in testObj">{{item}}</div>
</template>


<style scoped>
.logo {
  width: 640px;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 1em #42b883aa);
}
.todo-input {
  margin: 10px;
  height: 1.5rem;
  line-height: 1.5rem;
  width: 80%;
  outline: none;
  border: none;
  border-bottom: 1px solid;
  font-size: 20px;
}
</style>