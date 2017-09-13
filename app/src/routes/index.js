//	@flow
import { Route, IndexRoute } from 'react-router';
import React from 'react';

import Layout from '../layouts/Layout';
import Home from '../views/Home/Home';
import Cart from '../views/Cart/Cart';


export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="cart" component={Cart} />
	</Route>
);
