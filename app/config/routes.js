import React, { Component } from "react";
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import { connect } from "react-redux";
import AuthService from "../utils/AuthService";

import Container from '../components/Container'
import Login from '../components/Login'
import Home from "../components/Home"
import Contact from "../components/Contact"
import SurveyContainer from "../components/survey/SurveyContainer"
import CountryInfo from "../components/survey/shared_info/CountryInfo"

const auth = new AuthService('aYQBFES351HrymxuMCJ0vAnog1mDxA0h', 'shaverda.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  };
};
const mapStateToProps = (state) => ({
    profile: state.profile,
});


export default class App extends Component {
  render() {
    const routes = 
    <Route path="/" component={Container} auth={auth}>
        <IndexRoute component={Home} auth={auth}/>
        <Route path="home" component={Home} auth={auth}/>
        <Route path="login" component={Login} />
        <Route path="contact" component={Contact} />
        <Route path="survey" component={SurveyContainer} />
        <Route path="survey/countryinfo" component={CountryInfo} />
    </Route>;
    return(
      <Router history={browserHistory}>     
        {routes} 
      </Router>
    );
  }
}