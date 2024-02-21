<script setup>
import {ref, watch} from 'vue'
  const emit = defineEmits(['delAllDoneItem','selectAllItem'])
  const props = defineProps({
    todoList: Array
  })
  const isDoneTotal = props.todoList.filter(item => item.isDone).length
  const selectAll = function () {
    if (isDoneTotal === props.todoList.length && props.todoList.length !== 0) {
      return true
    } else {
      return false
    }
  }
</script>

<template>
  <footer>
    <hr/>
    <section class="todo-footer-options">
      <div>
        <input type="checkbox" aria-label="all-todo-input" 
              :checked="selectAll" @change="e => {$emit('selectAllItem', e.target.checked), selectAll= e.target.checked}">
        <label for="selectAll">
          已完成<span>{{isDoneTotal}}</span>/
          全部<span>{{props.todoList.length}}</span>
        </label>
      </div>
      <button @click="() => $emit('delAllDoneItem')">删除所有已完成项</button>
    </section>
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
  .test {
    width: 100px;
    height: 100px;
  }
</style>