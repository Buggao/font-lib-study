import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.modal.css'

export default class Item extends Component {
    //props类型校验
    static proprTypes = {
        updateTodoItem: PropTypes.func.isRequired,
        delateTodoItem: PropTypes.func.isRequired
    }

    state = {isMouseIn:false}
    //鼠标移入状态判断
    handleMouse = (flag) => {
        return () => {
            this.setState({isMouseIn: flag})
        }
    }
    //更改状态
    handleChange = (id) => {
        return (event) => {
            this.props.updateTodoItem(id, event.target.checked)
        }
    }
    //删除todoItem
    handleDelate = (id) => {
        if(window.confirm('是否要删除')) this.props.delateTodoItem(id)
    }

    render(){
        const {id, name, done} = this.props
        const {isMouseIn} = this.state
        return (
            <div className={['item-line']} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <div className='item-info'>
                    <input 
                        className="item-radio" type="checkbox" 
                        name="status" value="isFinished" 
                        checked={done} onChange={this.handleChange(id)}/>
                    <label className='item-label' htmlFor="status">{name}</label>
                </div>
                <div className='item-option'>
                    <button 
                        className='del-button' 
                        style={{display: isMouseIn? 'block' : 'none'}} 
                        onClick={() => this.handleDelate(id)}
                        >删除</button>
                </div>
            </div>
        )
    }
}