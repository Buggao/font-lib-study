<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import TodoList from './components/TodoList.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref} from 'vue';
interface TodoItem {
  id: string,
  content: string,
  isDone: boolean
}
  const todoList = ref<TodoItem[]>(
    [
      {id:'001', content:'学习', isDone: false},
      {id:'002', content:'睡觉', isDone: true},
      {id: '003', content:'敲代码', isDone: false}
    ])
  //增加
  const addTodoItme = function(todo:string){
    todoList.value.push({id:new Date(),content:todo, isDone:false })
  }
  //删除
  const delTodoItem = function(id:string){
    todoList.value = todoList.value.filter(item => item.id!=id)
  }
  //全选
  const selectAllItem = function(status:boolean){
    todoList.value = todoList.value.map(item => {item.isDone = status; return item})
  }
  //删除已完成
  const delAllDoneItem = function(){
    todoList.value = todoList.value.filter(item => !item.isDone)
  } 
</script>

<template>
  <HeaderComponent @add-item="addTodoItme"></HeaderComponent>
  <TodoList :todoList="todoList" @delate-item="delTodoItem"></TodoList>
  <FooterComponent :todoList="todoList" @del-all-done-item="delAllDoneItem" @select-all-item="selectAllItem"></FooterComponent>
</template>

