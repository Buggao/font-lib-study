<script setup lang="ts">
import TodoItem from './TodoItem.vue';
const props = defineProps({
  todoList: Array,
})
</script>
<template>
  <ul class="todo-list">
    <li v-for="item in props.todoList">
      <TodoItem :todoItem="item" v-bind="$attrs"></TodoItem>
    </li>
  </ul>
</template>

<style scoped>
  .todo-list{
    list-style: none;
  }
  .todo-list>li {
    margin:10px 0;
    border-radius: 8px;
  } 
  .todo-list>li:first-child {
    margin-top: 0;
  }
  .todo-list>li:last-child {
    margin-bottom: 0;
  }
  .todo-list>li:hover {
    box-shadow: 1px 1px 10px #646cff;
  }
</style>

