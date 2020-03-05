import React from 'react';
import { PageHeader } from 'vtex.styleguide';
import { FormattedMessage } from 'react-intl';

export const ContainerBlueCoins = ({ profile }) => {
	const title = <h2>Blue coins</h2>;

	const linkLabel = <FormattedMessage id="store/blue-coins.back-button" />;

	return <PageHeader title={title} linkLabel={linkLabel} />;
};
