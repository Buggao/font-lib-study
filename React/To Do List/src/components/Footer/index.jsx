
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.modal.css'

export default class Footer extends Component{
    //添加prop类型校验
    static proprTypes = {
        addTodoItem: PropTypes.func.isRequired,
        delDoneTodoItem: PropTypes.func.isRequired
    }
    handleAllCheck = (event) => {
        this.props.changeAllTodos(event.target.checked)
    }

    render(){
        const {todos, delDoneTodoItem} = this.props
        const finishedNum = todos.reduce( (pre, todo) => pre + (todo.done ? 1 : 0), 0 )
        return (
            <div className="footer-box">
                <div className="info-box">
                    <input type="checkbox" value="isFinishedAll" 
                        className="item-radio"
                        checked = {todos.length === finishedNum && todos.length !== 0 ? true : false}
                        onChange= { this.handleAllCheck }/>
                    <label>
                        <span>已完成</span> 
                        <span>{finishedNum}个/</span>
                        <span>全部{todos.length}个</span>
                    </label>
                </div>
                <button className="footer-button" onClick={ _ => {delDoneTodoItem()}}>清除已完成任务</button>
            </div>
        )
    }

}