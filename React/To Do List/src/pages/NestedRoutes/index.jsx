import React, {Component} from 'react'
import RouterNews from '../RouterNews'
import RouterMessage from '../RouterMessage'
import {NavLink, Switch, Route} from 'react-router-dom'
import './index.modal.css'

export default class NestedRouter extends Component {
    render(){
        return (
            <div className='nested-router'>
                <h1>多级路由页面</h1>
                <div className='pages-nav'>
                    <NavLink activeClassName="height-light" to="/nestedrouter/routernews">
                        news Page
                    </NavLink>
                    <NavLink activeClassName="height-light" to="/nestedrouter/messagepage">
                        message Page
                    </NavLink>
                </div>
                <div className="pages-container">
                    <Switch>
                        <Route path="/nestedrouter/routernews" component={RouterNews}/>
                        <Route path="/nestedrouter/messagepage" component={RouterMessage}/>
                    </Switch>
                </div>
            </div>
        )
    }
} 