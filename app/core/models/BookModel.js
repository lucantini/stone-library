// @flow

export default class BookModel {
	photo: number;
	title: string;
	description: string;
	value: string;
	constructor({ photo, title, description, value }: Object = {}) {
		this.photo = photo;
		this.title = title;
		this.description = description;
		this.value = value;
	}
}
