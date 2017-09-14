import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

const props = {
	className: 'macaco',
	onClick: sinon.spy(),
};

describe('<Button />', () => {
	it('Should receive props', () => {
		const wrapper = shallow(<Button {...props}>Open</Button>);
		expect(wrapper.find('button').first()).to.have.prop('className');
		expect(wrapper.find('button').first()).to.have.prop('children');
		expect(wrapper.find('button').first()).to.have.prop('onClick');
		expect(wrapper.find('button').first()).to.have.text('Open');
	});
});
