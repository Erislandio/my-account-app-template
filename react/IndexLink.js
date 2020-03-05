import PropTypes from 'prop-types';
import { intlShape, injectIntl } from 'react-intl';
import React from 'react';

const IndexLink = ({ render, intl }) => {
	return (
		<React.Fragment>
			<div id="blue-coins">
				{render([
					{
						name: intl.formatMessage({ id: 'store/blue-coins.link' }),
						path: '/blue-coins'
					}
				])}
			</div>
		</React.Fragment>
	);
};

IndexLink.propTypes = {
	render: PropTypes.func.isRequired,
	intl: intlShape.isRequired
};

export default injectIntl(IndexLink);
