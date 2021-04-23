import React from 'react';
import { Welcome, Posts } from '../../components';

const Home = (props) => {
	return (
		<>
			{props.connected ? (
				<Posts
					currentUser={props.currentUser}
					token={props.connected}
					role={props.role}
				></Posts>
			) : (
				<Welcome></Welcome>
			)}
		</>
	);
};

export default Home;
