import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

import reducers from './reducers/index';
import { addData } from "./actions/profile";
