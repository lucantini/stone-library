import React from 'react';
import { Link } from 'react-router';

import logo from '../../assets/images/logo_flip.png';

import './menu.scss';

const Menu = () => (
	<div className="header">
		<div className="content">
			<Link to="/">
				<img className="header__logo" src={logo} alt="Logo Stone" />
			</Link>
			<Link to="cart" className="cart-button">
				<span className="icon-cart" /><span className="cart-name" />
			</Link>
		</div>
	</div>
);

export default Menu;
