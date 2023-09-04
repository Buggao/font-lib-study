import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './index.modal.css'

export default class TonNavLink extends Component {
    render() {
        const { activeClassName } = this.props 
        return (
            <NavLink 
                activeClassName={activeClassName} 
                className="router-link" {...this.props}>
                    {this.props.children}
            </NavLink>
        )
    }
} 
