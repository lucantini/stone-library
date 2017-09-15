import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Shelve from './Shelve';

let wrapper;
const props = {
	book: {
		id: 123,
		photo: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS4Oe69KTt1atcjURwMRtjq5H11u04xJcgfLY6GapC4sMEmepzL',
		title: 'A Game of Thrones',
		description: 'From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before.',
		value: 320.30,
	},
	cartActions: {
		addBook: sinon.spy(),
	},
};

beforeEach('Shallow Shelbe', () => {
	wrapper = shallow(<Shelve {...props} />);
});

describe('<Shelve />', () => {
	it('Should have correct structure', () => {
		expect(wrapper.find('.shelf').length).to.eql(1);
		expect(wrapper.find('header').length).to.eql(1);
		expect(wrapper.find('.title').length).to.eql(1);
		expect(wrapper.find('.add-icon').length).to.eql(1);
	});

	it('Should have correct content', () => {
		expect(wrapper.find('header')).text().to.eql('A Game of Thrones');
		expect(wrapper.find('.book__description__price')).text().to.eql('R$ 320,30');
	});

	it('Should simulate addBook onClick', () => {
		wrapper.find('.add-button').simulate('click');
		props.cartActions.addBook.should.have.callCount(1);
	});
});
