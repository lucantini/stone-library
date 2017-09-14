// @flow

import React from 'react';
import Menu from '../components/Menu/Menu';

type Props = {
	children: any,
}

const Layout = (props: Props) => (
	<div>
		<Menu />
		{props.children}
	</div>
);

export default Layout;
