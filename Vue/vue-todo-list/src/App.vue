<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
import TodoList from './components/TodoList.vue';
import FooterComponent from './components/FooterComponent.vue';
import { ref } from 'vue';
  const showList = ref(false)
  const todoList = ref(
    [
      {id:'001', content:'学习', isDone: false},
      {id:'002', content:'睡觉', isDone: true},
      {id: '003', content:'敲代码', isDone: false}
    ])
  const demoStyle = {width:'100px',height:'100px',color: 'skyblue'}
  //增加
  const addTodoItme = function(todo){
    todoList.value.push({id:new Date(),content:todo,isDone:false })
  }
  //删除
  const delTodoItem = function(id){
    todoList.value = todoList.value.filter(item => item.id!=id)
  }
  //全选
  const selectAllItem = function(status){
    todoList.value = todoList.value.map(item => {item.isDone = status; return item})
  }
  //删除已完成
  const delAllDoneItem = function(){
    todoList.value = todoList.value.filter(item => !item.isDone)
  } 
</script>
<!-- <script src="./test.js"></script> -->
<template>
  <div>
    <HeaderComponent @add-item="addTodoItme"></HeaderComponent>
    <TodoList :todoList="todoList" @delate-item="delTodoItem"></TodoList>
    <FooterComponent 
      :todoList="todoList" 
      @del-all-done-item="delAllDoneItem" 
      @select-all-item="selectAllItem">
    </FooterComponent>
  </div>
</template>

<style scoped>
  .parent-test :deep(.test) {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
  .test-demo {
    width: v-bind('demoStyle.width');
    height: v-bind('demoStyle.height');
    color: v-bind('demoStyle.color')
  } 
</style>

