import { remove } from 'lodash';

const State = {
	cart: [],
};

const findBook = (state, book) => state.cart.find(cartBook => cartBook.id === book.id);
// const findBookIndex = (state, book) => state.cart.findIndex(cartBook => cartBook.id === book.id);

const addBook = (state, book) => {
	const bookFound = findBook(state, book);
	if (bookFound) {
		return {
			...state,
			cart: state.cart.map((cartBook) => {
				if (cartBook.id === bookFound.id) {
					return {
						...bookFound,
						quantity: cartBook.quantity + 1,
						subTotalValue: book.value * (cartBook.quantity + 1),
					};
				}
				return cartBook;
			}),
		};
	}
	return {
		...state,
		cart: state.cart.concat({
			...book,
			quantity: 1,
			subTotalValue: book.value,
		}),
	};
};

const removeBook = (state, book) => {
	const bookFound = findBook(state, book);
	if (bookFound) {
		if (bookFound.quantity > 1) {
			return {
				...state,
				cart: state.cart.map((cartBook) => {
					if (cartBook.id === bookFound.id) {
						return {
							...bookFound,
							quantity: cartBook.quantity - 1,
							subTotalValue: book.value * (cartBook.quantity - 1),
						};
					}
					return cartBook;
				}),
			};
		}
		const stateCart = [].concat(state.cart);
		remove(stateCart, current => current.id === bookFound.id);
		return {
			...state,
			cart: stateCart,
		};
	}
	return { ...state };
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'ADD_BOOK':
			return addBook(state, action.book);
		case 'REMOVE_BOOK':
			return removeBook(state, action.book);
		default:
			return state;
	}
}
