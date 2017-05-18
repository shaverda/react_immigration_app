import { createStore, compose, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import { browserHistory } from 'react-router';
import profileReducer from './reducers/index'
import { addData } from "./actions/actionCreators";

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);


const store = createStore(
  combineReducers({
    routing: routerReducer,
    profile: profileReducer
  }), {}, enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;