<script setup>
import { ref } from 'vue';
const emit = defineEmits(['addItem'])
  const newTodo = ref('')
const handleClick = (param,param1) => {(
    console.log(`${param}th box is clicked`,param1)
)}
</script>

<template>
  <h1 class="logo">To Do List</h1>
  <div class="container">
    <div v-for="item in [1,2,3]" class="box" @click="handleClick(item,'yes')"></div>
  </div>
  <hr/>
  <input 
    v-model=newTodo
    type="text" placeholder="请输入新的To do项，回车新增" 
    class="todo-input" @keydown.enter="($emit('addItem',newTodo), newTodo='')">
</template>


<style scoped>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid #42b883aa;
}
.box:first-child{
  opacity: 0;
  background: #33228899;
}
.box:nth-child(2){
  visibility: hidden;
  background: #aa99bb;
}
.box:nth-child(3){
  background: #33aabb;
}
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