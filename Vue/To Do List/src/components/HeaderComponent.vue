<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['addItem'])
  const newTodo = ref('')
</script>

<template>
  <h1 class="logo">To Do List</h1>
  <hr/>
  <input 
    v-model=newTodo
    type="text" placeholder="请输入新的To do项，回车新增" 
    class="todo-input" @keydown.enter="($emit('addItem',newTodo), newTodo='')">
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