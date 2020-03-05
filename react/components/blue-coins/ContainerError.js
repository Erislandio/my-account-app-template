import React from 'react';
import { PageHeader } from 'vtex.styleguide';
import { FormattedMessage } from 'react-intl';
import styles from './styles.css';
import { Link } from 'react-router-dom';

export const ContainerError = () => {
	const titleError = (
		<div className="title-error">
			<FormattedMessage id="store/blue-coins.data-title-error" />
		</div>
	);

	const description = (
		<div className="description-error">
			<FormattedMessage id="store/blue-coins.data-description-error" />
		</div>
	);

	const linkLabel = (
		<Link to="/">
			<FormattedMessage id="store/blue-coins.back-button" />
		</Link>
	);

	return (
		<main className={styles.containerError}>
			<PageHeader linkLabel={linkLabel} title={titleError} subtitle={description} />
		</main>
	);
};
