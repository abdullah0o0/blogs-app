import React from 'react'
import {Switch,Route} from 'react-router-dom'
import About from './About'
import Blogs from './Blogs'
import Home from './Home'
import Login from './Login'
import Register from './Register'

export default function Nav() {
    return (
        <div>
            <Switch>
            <Home />
            <About />
            <Blogs />
            <Login />
            <Register />
            </Switch>
        </div>
    )
}
