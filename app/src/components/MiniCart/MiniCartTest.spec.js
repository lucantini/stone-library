import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MiniCart from './MiniCart';

let wrapper;
const props = {
	cart: [{
		id: 123,
		photo: 'http://t2.gstatic.com/images?q=tbn:ANd9GcS4Oe69KTt1atcjURwMRtjq5H11u04xJcgfLY6GapC4sMEmepzL',
		title: 'A Game of Thrones',
		description: 'From a master of contemporary fantasy comes the first novel of a landmark series unlike any you’ve ever read before.',
		value: 320.30,
		quantity: 2,
		subTotalValue: 640.60,
	}, {
		id: 456,
		photo: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTmdDIdksExiHzoIROKZ0VCQU6dAxgzO4GimRIWzzr9K4fyVyX7',
		title: 'IT',
		description: 'Stephen King’s terrifying, classic #1 New York Times bestseller, “a landmark in American literature”.',
		value: 35.67,
		quantity: 1,
		subTotalValue: 35.67,
	}],
	removeBook: sinon.spy(),
};

beforeEach('Shallow MiniCart', () => {
	wrapper = shallow(<MiniCart {...props} />);
});

describe('<MiniCart />', () => {
	it('Should have correct structure', () => {
		expect(wrapper.find('.mini-cart').length).to.eql(1);
		expect(wrapper.find('.mini-cart__title').length).to.eql(1);
		expect(wrapper.find('.mini-cart__content').length).to.eql(2);
	});

	it('Should have correct content', () => {
		expect(wrapper.find('.mini-cart__content__title').at(0)).text().to.eql('A Game of Thrones');
		expect(wrapper.find('.mini-cart__content__quantity').at(0)).text().to.eql('2');
	});

	it('Should simulate removeBook onClick', () => {
		wrapper.find('button').at(0).simulate('click');
		props.removeBook.should.have.callCount(1);
	});
});
