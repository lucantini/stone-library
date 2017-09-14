import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/images/logo_flip.png';

import './menu.scss';

const Menu = () => (
	<div className="header">
		<Link to="/">
			<img className="header__logo" src={logo} alt="Logo Stone" />
		</Link>
		<Link to="cart" className="cart-icon">cart</Link>
	</div>
);

export default Menu;
