import React from 'react';
import { FormattedMessage } from 'react-intl';

export const LogoTitle = () => (
	<div className="logo-container">
		<img src="https://lh3.googleusercontent.com/proxy/K8j4QkwxXxQyvuYQijbyMSrScdfVzaZPEXLJhp90h1waPBuW8MHR61RVSyUZReq7kJeXiZ7aEmC8rz-gGyU5LPCc9SNIxgdmzjQmKzTwupPyt1Yswyysdzg2ttMNRTA" />{' '}
		 /{' '}
		<h3>
			<FormattedMessage id="store/blue-coins.page-title" />
		</h3>
	</div>
);
