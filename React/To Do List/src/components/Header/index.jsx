import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.modal.css'


export default class HellowReact extends Component {
    //添加prop类型校验
    static proprTypes = {
        addTodoItem: PropTypes.func.isRequired
    }
    hendleKeyUp = event => {
        const {key, target} = event
        if(target.value.trim() === ''){
            alert('输入内容不能为空')
            return
        }else if(key === "Enter") {
            const todoItem = {id: Date.now(), name: target.value, done: false}
            this.props.addTodoItem(todoItem)
            target.value = ''
        }
    }
    render(){
        return (
            <header className="header">
                <span className="header-text">To Do List</span>
                <hr className="header-hr"></hr>
                <input onKeyUp={this.hendleKeyUp} type="text" className='header-input' placeholder='请输入你的任务名称，按回车确认'/>
            </header>)
    }
}