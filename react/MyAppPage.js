import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import BlueCoinsContainer from './components/BlueCoinsContainer';

const MyAppPage = () => (
	<Fragment>
		<Route exact path="/blue-coins" component={BlueCoinsContainer} />
	</Fragment>
);

export default MyAppPage;
