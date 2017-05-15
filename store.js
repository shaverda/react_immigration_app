import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducers from './reducers/index';
import { addData } from "./actions/profile";

const initialState = {};

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, initialState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
