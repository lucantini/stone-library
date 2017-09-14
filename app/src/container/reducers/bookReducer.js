//	@flow

const State = {
	books: [],
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'GET_BOOKS_FULFILLED':
			return { ...state, books: action.books };
		default:
			return state;
	}
}
