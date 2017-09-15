import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Shelve from '../../components/Shelve/Shelve';

import * as bookActions from '../../container/actions/bookActions';
import * as cartActions from '../../container/actions/cartActions';

type Props = {
	bookActions: Object,
	cartActions: Object,
	books: [],
}

class Home extends Component {
	props: Props;

	componentWillMount() {
		this.props.bookActions.getBooks();
	}
	renderShelves = () => this.props.books.map((book, index) =>
		<Shelve book={book} key={index} cartActions={this.props.cartActions} />);

	render() {
		return (
			<section id="home" className="app-container--home">
				{this.renderShelves()}
			</section>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.bookReducer };
}

function mapDispatchToProps(dispatch) {
	return {
		bookActions: bindActionCreators(bookActions, dispatch),
		cartActions: bindActionCreators(cartActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
