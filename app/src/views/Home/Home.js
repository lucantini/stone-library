// @flow

import React from 'react';
import { connect } from 'react-redux';

import FirstComponent from '../../components/firstcomponent/FirstComponent';

type Props = {
	title: string,
}

const Home = (props: Props) => <div>
	{props.title}
	<FirstComponent />
</div>;

export default connect(state => state.homeReducer)(Home);
