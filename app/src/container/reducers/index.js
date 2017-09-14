import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import bookReducer from './bookReducer';
import cartReducer from './cartReducer';

const allReducers = combineReducers({
	bookReducer,
	cartReducer,
	routing: routerReducer,
});

export default allReducers;
