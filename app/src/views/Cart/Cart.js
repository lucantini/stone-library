import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import currencyMask from '../../../core/helpers/masks/currencyMask';

import CartContent from '../../components/CartContent/CartContent';
import * as cartActions from '../../container/actions/cartActions';

import './cart.scss';

type Props = {
	cart: [],
	cartActions: Object,
};

class Cart extends Component {
	props: Props;
	constructor(props) {
		super(props);
		this.state = {
			totalValue: 0,
		};
	}

	componentWillMount() {
		this.setTotalValue(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.setTotalValue(nextProps);
	}

	setTotalValue = async(props) => {
		let total = 0;
		await props.cart.forEach((book) => { total += book.subTotalValue; });
		this.setState({ totalValue: total });
	};

	renderCartContent = () => this.props.cart.map((book, index) =>
		<CartContent book={book} key={index} removeBook={this.props.cartActions.removeBook} />);

	render() {
		return (
			<section id="cart" className="app-container">
				<div className="cart">
					<p className="title">Carrinho</p>
					<div className="cart-header">
						<div className="cart-header__title--medium">Descrição</div>
						<div className="cart-header__title--small">Quantidade</div>
						<div className="cart-header__title--small">Subtotal</div>
						<div className="cart-header__title--small" />
					</div>
					{this.renderCartContent()}
					<p className="cart__total">
						Total: {currencyMask.mount(this.state.totalValue)}
					</p>
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.cartReducer };
}

function mapDispatchToProps(dispatch) {
	return {
		cartActions: bindActionCreators(cartActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

