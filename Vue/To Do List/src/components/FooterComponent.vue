<script setup>
import {ref, watch} from 'vue'
  const emit = defineEmits(['delAllDoneItem','selectAllItem'])
  const props = defineProps({
    todoList: Array
  })
  const isDoneTotal = props.todoList.filter(item => item.isDone).length
  const selectAll = ref(false) 
  watch(props.todoList, ()=> {
    isDoneTotal === props.todoList.length ? selectAll.value = true : selectAll.value = false
  }, )

</script>

<template>
  <hr/>
  <footer class="todo-footer-options">
    <div>
      <input type="checkbox" aria-label="all-todo-input" 
            v-model="selectAll" @change="e => {$emit('selectAllItem', e.target.checked), selectAll= e.target.checked}">
      <label for="selectAll">
        已完成<span>{{isDoneTotal}}</span>/
        全部<span>{{props.todoList.length}}</span>
      </label>
    </div>
    <button @click="() => $emit('delAllDoneItem')">删除所有已完成项</button>
  </footer>
</template>

<style scoped>
  .todo-footer-options {
    margin-top: 10px;
    padding-left: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>