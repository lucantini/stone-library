import React from 'react';

import './miniCart.scss';

type Props = {
	cart: [],
	removeBook: () => {},
};

const MiniCart = (props:Props) => {
	const { cart, removeBook } = props;

	const renderMiniCartContent = () => cart.map((book, index) =>
		<div key={index} className="mini-cart__content">
			<p className="mini-cart__content__title">{book.title}</p>
			<p className="mini-cart__content__quantity">{book.quantity}</p>
			<button onClick={() => removeBook(book)} className="icon-delete" />
		</div>
	);

	return (
		<div className="mini-cart">
			<p className="mini-cart__title">MiniCart</p>
			{renderMiniCartContent()}
		</div>
	);
};

export default MiniCart;
