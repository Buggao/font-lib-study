import React, { Component } from 'react'
import axios from 'axios'
import demoUserAver from '../../userAver.png'
import './index.modal.css'

export default class GithubInput extends Component {
    handleSearch = () => {
        const {keyWordElement:{value:keyWord}} = this
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('response data is', response.data);
                this.props.setUsers(response.data.items)
            },
            error => {
                console.log('axios get reslute is false');
                return [
                    {avatar_url:demoUserAver,login:'Ton1'},
                    {avatar_url:demoUserAver,login:'Ton2'},
                    {avatar_url:demoUserAver,login:'Ton3'},
                    {avatar_url:demoUserAver,login:'Ton4'},
                    {avatar_url:demoUserAver,login:'Ton5'}
                ]
            }
        )
        return '123'
    }

    render(){
        return (
            <div className="main">
                <h1 className='github-header-text'>搜索Github用户</h1>
                <input type="text" ref={c => this.keyWordElement = c}placeholder='输入关键词点击搜索' className='github-input'/>
                <button onClick={this.handleSearch} className='github-button'>搜索</button>
            </div>
        )
    }
}