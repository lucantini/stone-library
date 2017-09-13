// @flow

import React from 'react';
import logo from '../assets/images/Logo_MA_Blocada_Colorida.png';

type Props = {
	children: any,
}

const Layout = (props: Props) => (
	<div>
		<img src={logo} alt="logo mongeral aegon" />
		{props.children}
	</div>
);

export default Layout;
