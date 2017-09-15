import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from './Button';

let wrapper;

const props = {
	className: 'macaco',
	onClick: sinon.spy(),
};

beforeEach('Shallow Button', () => {
	wrapper = shallow(<Button {...props}>Open</Button>);
});

describe('<Button />', () => {
	it('Should receive props', () => {
		expect(wrapper.find('button').first()).to.have.prop('className');
		expect(wrapper.find('button').first()).to.have.prop('onClick');
		expect(wrapper.find('button').first()).to.have.text('Open');
	});

	it('Should render with className macaco', () => {
		expect((wrapper.find('button')).props().className).to.eql('macaco');
	});

	it('Should simulate click', () => {
		wrapper.find('button').simulate('click');
		props.onClick.should.have.callCount(1);
	});

	it('Should render class-less button with the butto-default className', () => {
		const classLessWrapper = shallow(<Button />);
		expect(classLessWrapper.props().className).to.eql('button button-default');
	});

	it('Should render with loading className and as disabled when -sloading', () => {
		const loadingWrapper = shallow(<Button isLoading />);
		expect(loadingWrapper.props().className).to.eql('button button-default is-loading');
		expect(loadingWrapper.props().disabled).to.eql(true);
	});
});
