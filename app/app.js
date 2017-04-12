// import React from 'react';
// import ReactDOM from 'react-dom';
// import routes from './config/routes';

// ReactDOM.render(routes, document.getElementById("app"));



import React from 'react';
import { render } from 'react-dom';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';
import Header from './components/Header';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Header} />

  </Router>
), document.getElementById('app'))