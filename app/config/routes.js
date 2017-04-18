import React, { Component } from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute  } from 'react-router'

import Container from '../components/Container'
import Login from '../components/Login'
import Home from "../components/Home"
import Contact from "../components/Contact"
import AuthService from '../utils/AuthService'

const auth = new AuthService('aYQBFES351HrymxuMCJ0vAnog1mDxA0h', 'shaverda.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Container} auth={auth}>
    	<IndexRoute component={Home} auth={auth} />
   		<Route path="home" component={Home} auth={auth} />
   		<Route path="login" component={Login} auth={auth} />
   		<Route path="contact" component={Contact} auth={auth} />

    </Route>
  </Router>

);
