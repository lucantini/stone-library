import BookService from '../services/BookService';
import BookModel from '../../core/models/BookModel';

export default class ContributionsController {
	service: BookService;

	constructor() {
		this.service = new BookService();
	}

	getBooks() {
		return this.service.getBooks().then(data =>
			data.data.books.map(obj => new BookModel(obj)));
	}
}
