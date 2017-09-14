/* eslint-disable */
import React, { Component } from 'react';
import currencyMask from '../../../core/helpers/masks/currencyMask';

import './cartContent.scss';

type Props = {
	book: [],
	removeBook: () => {},
};

class CartContent extends Component {
	props: Props;
	constructor(props) {
		super(props);
		// console.log(this.props.book);
		// console.log(this.props.removeBook);
	}

	render() {
		const { book, removeBook } = this.props;
		return (
			<div className="cart__content">
				<div className="cart__content__title">
					{book.title}
				</div>
				<div className="cart__content__quantity">
					{book.quantity}
				</div>
				<div className="cart__content__subtotal">
					{currencyMask.mount(book.subTotalValue)}
				</div>
				<div className="cart__content__action">
					<button onClick={() => removeBook(book)} className="icon-delete" />
				</div>
			</div>
		);
	}
}

export default CartContent;
