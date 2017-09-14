import React from 'react';
import { shallow } from 'enzyme';

import Menu from './Menu';

describe('<Menu />', () => {
	it('Should have correct structure', () => {
		const wrapper = shallow(<Menu />);
		expect(wrapper.find('.header').length).to.eql(1);
		expect(wrapper.find('.content').length).to.eql(1);
		expect(wrapper.find('Link').length).to.eql(2);
		expect(wrapper.find('.header__logo').length).to.eql(1);
		expect(wrapper.find('.icon-cart').length).to.eql(1);
		expect(wrapper.find('.cart-name').length).to.eql(1);
	});
});
