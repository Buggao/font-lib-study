<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  todoItem: Object,
})
const emit = defineEmits(['delateItem'])
const isShowBtn = ref(false)
</script>
<template>
  <div class="todo-item"  @mouseenter="isShowBtn=true" @mouseleave="isShowBtn=false">
    <div class="todo-info">
      <input type="checkbox" aria-label="todo-input" v-model="todoItem.isDone">
      <span>{{todoItem.content}}</span>
    </div>
    <button @click="()=>$emit('delateItem', todoItem.id)" v-show="isShowBtn">删除</button>
  </div>
</template>

<style scoped>
  .todo-item{
    height: 50px;
    line-height: 50px;
    display: flex;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;
  }
  .todo-info {
    font-size: 1.3rem;
  }
  .todo-info>input:hover {
    outline-color: #646cff;
    border-color: #646cff;
  }
</style>