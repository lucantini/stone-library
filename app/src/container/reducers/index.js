import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bookReducer from './bookReducer';

const allReducers = combineReducers({
	bookReducer,
	routing: routerReducer,
});

export default allReducers;
