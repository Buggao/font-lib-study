import React, { Component } from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'

export default class TodoList extends Component{
    state = {
        todos: [
          {id: '001', name:'吃饭', done:true},
          {id: '002', name:'学习', done:false},
          {id: '003', name:'睡觉', done:true},
          {id: '004', name:'打游戏', done:true},
        ],
      }
      //添加todoitem
      addTodoItem = (todoItme) => {
        const oldTodos = this.state.todos
        const newTodos = [todoItme, ...oldTodos]
        this.setState({todos: newTodos})
      }
      //更新todoitem状态（checked）
      updateTodoItem = (id, isDone) => {
        const {todos} = this.state
        const newTodos = todos.map(item => {
          if(item.id === id) item.done = isDone
          return item 
        })
        this.setState({todos: newTodos})
      }
      //删除todoitem
      delateTodoItem = (id) => {
         const oldTodos = this.state.todos
         const newTodos = oldTodos.filter(item => item.id !== id)
         this.setState({todos: newTodos})
      }
      //全部完成
      changeAllTodos = (done) => {
        const oldTodos = this.state.todos
        const newTodos = oldTodos.map( item => ({...item, done}))
        this.setState({todos: newTodos})
      }
      //删除已完成
      delDoneTodoItem = () => {
        if(window.confirm('确定要清除已完成任务吗?')) {
          const oldTodos = this.state.todos
          const newTodos = oldTodos.filter( item => !item.done)
          this.setState({todos: newTodos})
        }
      }
    render() {
        const {todos} = this.state
        return (
          <div>
            <Header addTodoItem = {this.addTodoItem}/>
            <List todos = {todos} 
              updateTodoItem = {this.updateTodoItem}
              delateTodoItem = {this.delateTodoItem}/>
            <Footer todos = {todos}
              changeAllTodos = {this.changeAllTodos}
              delDoneTodoItem = {this.delDoneTodoItem}/>
          </div>
        )
    }
}