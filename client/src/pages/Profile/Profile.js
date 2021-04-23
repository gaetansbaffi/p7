import React from 'react';
import { ProfileDiv, ProfileHeader, ProfileInfos } from './Profile.elements';
import { useState, useEffect, useCallback } from 'react';

const Profile = (props) => {
	const [user, setUser] = useState({});
	console.log(user);

	const loadProfile = useCallback(async () => {
		const response = await fetch(`users/${props.currentUser}`);
		const data = await response.json();

		setUser(data);

		console.log(user);
	}, [user, props]);

	useEffect(() => {
		loadProfile();
	}, []);

	return (
		<>
			{user ? (
				<ProfileDiv>
					<ProfileHeader>Profil de: {user.username}</ProfileHeader>
					<ProfileInfos>
						<p>Prénom: {user.firstname}</p>
						<p>Nom: {user.lastname}</p>
						<p>Emploi: {user.job}</p>
						<p>Email: {user.email}</p>
					</ProfileInfos>
				</ProfileDiv>
			) : (
				<p>Loading</p>
			)}
		</>
	);
};

export default Profile;
