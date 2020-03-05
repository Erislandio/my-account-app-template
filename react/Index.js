import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import IndexBlueCoins from './components/blue-coins/Index';

const Index = () => (
	<Fragment>
		<Route exact path="/blue-coins" component={IndexBlueCoins} />
	</Fragment>
);

export default Index;
