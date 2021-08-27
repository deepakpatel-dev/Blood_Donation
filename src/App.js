import React from 'react'

import Menu from './Menu'
import About from './About'
import Contact from './Contact'

import Register from './regComponent/Register'
import Login from './regComponent/Login'

import { Switch , Route } from 'react-router-dom';

export default class App extends React.Component
{
    constructor(props){
        super(props)
    }

    render()
    {
        return <>
            <Menu/>

            <Switch>
              <Route exact path="/" component={Login}/>              
              <Route path="/contact" component={Contact}/>

              <Route path="/register" component={Register}/>
              <Route path="/about" component={About}/>
            </Switch>
            
        </>
    }
}
