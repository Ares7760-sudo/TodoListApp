import React from 'react';
import './Nav.scss'
import {
    Link, NavLink
  } from "react-router-dom";

class Nav extends React.Component {
    render() {
        return(
                <div className='topnav'>
                    <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                    <NavLink to="/todo" activeClassName="active">TodoList</NavLink>
                    <NavLink to="/guide" activeClassName="active">Guide</NavLink>
                </div>
        )
    }
}

export default Nav