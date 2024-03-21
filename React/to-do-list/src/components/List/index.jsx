import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.modal.css'

export default class List extends Component {
    //添加prop类型校验
    static proprTypes = {
        todos: PropTypes.array.isRequired,
        updateTodoItem: PropTypes.func.isRequired,
        delateTodoItem: PropTypes.func.isRequired
    }
    render() {
        const {todos, updateTodoItem, delateTodoItem} = this.props
        return (
            <div className='list-box'>
                <ul className='list-ul'>
                    {todos.map(todo => {
                        return (<li className='list-li' key={todo.id}>
                                    <Item 
                                        {...todo}
                                        updateTodoItem={updateTodoItem}
                                        delateTodoItem= {delateTodoItem}/>
                                </li>)
                    })}
                </ul>
            </div>
        )
    }
}