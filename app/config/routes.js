import React from 'react';
import { hashHistory, Router, Route, IndexRoute } from 'react-router';

import Header from "../components/Header";

export default (
	<Router history={hashHistory}>
		<Route path="/" component={Header}>

		</Route>
	</Router>

);

