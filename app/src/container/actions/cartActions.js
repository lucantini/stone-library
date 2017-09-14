export function addBook(book) {
	return (dispatch) => {
		dispatch({ type: 'ADD_BOOK', book });
	};
}

export function removeBook(book) {
	return (dispatch) => {
		dispatch({ type: 'REMOVE_BOOK', book });
	};
}
