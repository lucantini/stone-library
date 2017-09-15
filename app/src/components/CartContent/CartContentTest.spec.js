import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import CartContent from './CartContent';

let wrapper;
const props = {
	book: {
		id: 123,
		photo: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS4Oe69KTt1atcjURwMRtjq5H11u04xJcgfLY6GapC4sMEmepzL',
		title: 'A Game of Thrones',
		description: 'From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before.',
		quantity: 2,
		subTotalValue: 640.60,
		value: 320.30,
	},
	removeBook: sinon.spy(),
};

beforeEach('Shallow Shelbe', () => {
	wrapper = shallow(<CartContent {...props} />);
});

describe('<CartContent />', () => {
	it('Should have correct structure', () => {
		expect(wrapper.find('.cart__content').length).to.eql(1);
		expect(wrapper.find('.cart__content__title').length).to.eql(1);
		expect(wrapper.find('.cart__content__subtotal').length).to.eql(1);
		expect(wrapper.find('.cart__content__action').length).to.eql(1);
		expect(wrapper.find('.icon-delete').length).to.eql(1);
	});

	it('Should have correct content', () => {
		expect(wrapper.find('.cart__content__title')).text().to.eql('A Game of Thrones');
		expect(wrapper.find('.cart__content__quantity')).text().to.eql('2');
		expect(wrapper.find('.cart__content__subtotal')).text().to.eql('R$ 640,60');
	});

	it('Should simulate removeBook onClick', () => {
		wrapper.find('.icon-delete').simulate('click');
		props.removeBook.should.have.callCount(1);
	});
});
