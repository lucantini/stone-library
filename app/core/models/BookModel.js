// @flow

export default class BookModel {
	id: number;
	photo: number;
	title: string;
	description: string;
	value: string;
	constructor({ id, photo, title, description, value }: Object = {}) {
		this.id = id;
		this.photo = photo;
		this.title = title;
		this.description = description;
		this.value = value;
	}
}
