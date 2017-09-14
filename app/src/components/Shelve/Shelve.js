import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import * as cartActions from '../../container/actions/cartActions';

import './shelve.scss';

type Props = {
	book: {
		title: string,
		photo: string,
		description: string,
		value: number
	},
	// cart: [],
	// cartActions: Object,
}

class Shelve extends Component {
	props: Props;
	constructor(props) {
		super(props);

		this.state = {
			planCode: '',
		};
	}

	render() {
		return (
			<div className="shelf">
				<p className="title">
					{this.props.book.title}
				</p>
				<div className="content">
					<div className="cover">
						<img
							className="photo"
							src={this.props.book.photo}
							alt={this.props.book.title}
						/>
					</div>
					<p className="description">
						{this.props.book.description}
					</p>
					<p className="price">
						{this.props.book.value}
					</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.cartReducer };
}

function mapDispatchToProps(dispatch) {
	return {
		cartActions: bindActionCreators({}, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Shelve);

