import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import BlueCoinsContainer from './components/Index';

const Index = () => {
	return (
		<Fragment>
			<Route exact path="/blue-coins" component={BlueCoinsContainer} />
		</Fragment>
	);
};

export default Index;
