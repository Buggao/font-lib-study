import React, { Component } from 'react'
import './index.modal.css'

export default class GithubList extends Component {
    handleClick = () =>{

    }
    render(){
        const {userList} = this.props
        return (
            <div className='item-container'>
                {
                    userList.length > 0 ?
                    userList.map(item => {
                        return (
                            <div className='user-item' key={item.id} onClick={() => this.handleClick}>
                                <img src={item.avatar_url} alt={`${item.login}'s avatar`} className='user-aver'/>
                                <div className='user-name'>{item.login}</div>
                            </div>
                        )
                    }) :
                    <span>欢迎使用，输入关键字后点击点击搜索按钮</span>
                }
            </div>
        )
    }
}