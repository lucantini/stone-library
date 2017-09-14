import BookController from '../../../core/controllers/BookController';

export function getBooks() {
	const controller = new BookController();
	return (dispatch) => {
		controller.getBooks()
			.then((res) => {
				dispatch({ type: 'GET_BOOKS_FULFILLED', books: res });
			});
	};
}

export function addBook(book) {
	return (dispatch) => {
		dispatch({ type: 'ADD_BOOK', book });
	};
}
