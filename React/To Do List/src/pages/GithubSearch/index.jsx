import React, { Component } from 'react'
import GithubInput from '../../components/GithubInput'
import GithubList from '../../components/GithubList'

export default class GithubSearch extends Component {
    state = {
        userList:[]
    }
    //存放获取的user
    setUsers = (userList) => {
        this.setState({userList})
    }
    render(){
        const { userList} = this.state
        return (
            <section>
                <GithubInput setUsers={this.setUsers}></GithubInput> 
                <GithubList userList={userList}></GithubList>
            </section>
        )
    }
}