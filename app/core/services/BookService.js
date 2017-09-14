// @flow

import booksMock from '../../mock/json/books';

export default class BookService {
	/* eslint-disable */
	getBooks = () => {
		return Promise.resolve(booksMock);
	}
	/* eslint-enable */
}
