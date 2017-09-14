import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Shelve from './Shelve';

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

describe('<Shelve />', () => {
	it('Should have correct structure', () => {
		const wrapper = shallow(<Shelve {...props} />);
		console.log(wrapper);
	});
});
