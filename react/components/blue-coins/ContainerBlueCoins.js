import React, { useContext } from 'react';
import { PageHeader } from 'vtex.styleguide';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { LogoTitle } from '../LogoTitle';
import { ProfileContext } from './Index';
import { TableOrders } from './tableOrders';

export const ContainerBlueCoins = () => {
	const { firstName } = useContext(ProfileContext);

	const linkLabel = (
		<Link to="/">
			<FormattedMessage id="store/blue-coins.back-button" />
		</Link>
	);

	return (
		<PageHeader title={<LogoTitle />} linkLabel={linkLabel}>
			<TableOrders />
		</PageHeader>
	);
};
