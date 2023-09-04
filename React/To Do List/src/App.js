import React, { Component, lazy, Suspense } from 'react'
import {BrowserRouter, Route } from 'react-router-dom'
import TonNavLink from './components/TonNavLink'
import './App.css';

const GithubSearch = lazy( _ => import('./pages/GithubSearch'))
const TodoList = lazy( _ => import('./pages/TodoList'))
const NestedRouter = lazy( _ => import('./pages/NestedRoutes'))

export default class App extends Component {
  render(){ 
    return (
      <BrowserRouter>
        <div className="App">
          <h1 className='app-router'>React Demo</h1>
          <main className='main-container'>
            <div className='aside-nav'>
              <TonNavLink activeClassName="height-light" to="todolist">
                To Do List
              </TonNavLink>
              <TonNavLink activeClassName="height-light" to="githubsearch">
                Github Search
              </TonNavLink>
              <TonNavLink activeClassName="height-light" to="nestedrouter">
                NestedRouter
              </TonNavLink>
            </div>
            <div className="container">
                <Suspense fallback={<h2 style={{backgroundColor:'skyblue'}}>Loading...</h2>}>
                  <Route path="/todolist" component={TodoList}></Route>
                  <Route path="/githubsearch" component={GithubSearch}></Route>
                  <Route path="/nestedrouter" component={NestedRouter}></Route>
                </Suspense>
            </div>            
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

