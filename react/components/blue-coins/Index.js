import React, { createContext } from 'react';
import { useQuery } from 'react-apollo';
import GET_PROFILE from '../../graphql/query/getProfile.gql';
import { Spinner } from 'vtex.styleguide';
import { ContainerError } from './ContainerError';
import styles from './styles.css';
import { ContainerBlueCoins } from './ContainerBlueCoins';

export const ProfileContext = createContext(null);

const BlueCoinsContainer = () => {
	const { data, loading, error } = useQuery(GET_PROFILE);

	if (loading || !data) {
		return (
			<div className="loading-spinner">
				<Spinner />
			</div>
		);
	}

	if (error) {
		return <ContainerError />;
	}

	const { profile } = data;

	return (
		<ProfileContext.Provider value={profile}>
			<div className={styles.container}>
				<ContainerBlueCoins />
			</div>
		</ProfileContext.Provider>
	);
};

export default BlueCoinsContainer;
