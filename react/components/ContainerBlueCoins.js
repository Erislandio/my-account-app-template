import React from 'react';
import { PageHeader } from 'vtex.styleguide';
import { FormattedMessage } from 'react-intl';
import { Link } from 'vtex.my-account-commons/Router';

export const ContainerBlueCoins = ({ profile }) => {
	const title = <h2>Blue coins</h2>;

	const linkLabel = (
		<Link to="/account#/profile">
			<FormattedMessage id="store/blue-coins.back-button" />
		</Link>
	);

	return <PageHeader title={title} linkLabel={linkLabel} />;
};
