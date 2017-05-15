import { createStore, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducer from './reducers/index';
import { addData } from "./actions/profile";

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }), {}, enhancers
);

function doThis() {
    let profile = localStorage.getItem("profile");
    let profileData = profile ? JSON.parse(localStorage.profile) : {};
    store.dispatch(addData(profileData));

}

export const history = syncHistoryWithStore(browserHistory, store);

export default store;