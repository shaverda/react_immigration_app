import React, { Component } from 'react'
import { render } from 'react-dom'
import { hashHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import Container from '../components/Container'
import Login from '../components/Login'
import Home from "../components/Home"

import AuthService from '../utils/AuthService'

const auth = new AuthService('aYQBFES351HrymxuMCJ0vAnog1mDxA0h', 'shaverda.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Container}>

    </Route>
  </Router>

);
