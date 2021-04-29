import React, { useContext, useState } from 'react';
import {
	Form,
	Input,
	LoginHeader,
	FormContainer,
	InputBtn,
	LoginAlert,
} from './Login.elements';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { CookiesContext } from '../../utils/cookiesContext';

const Login = () => {
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const [message, setMessage] = useState();

	const { setCookies } = useContext(CookiesContext);

	const onSubmit = (data) => {
		fetch('/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => {
				setCookies(document.cookie);
				response.json().then((data) => {
					if (data.message) {
						return setMessage(data.message);
					} else {
						history.push('/');
					}
				});
			})

			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<LoginHeader>Se Connecter</LoginHeader>
					<Input
						type="text"
						placeholder="E-mail"
						name="email"
						id="email"
						ref={register}
					/>
					<label htmlFor="email" value="email">
						email
					</label>
					<Input
						type="password"
						placeholder="Mot de passe"
						name="password"
						ref={register}
						id="password"
					/>
					<label htmlFor="password" value="password">
						password
					</label>
					<InputBtn type="submit" value="Connexion" />
				</FormContainer>
				{message ? <LoginAlert>{message}</LoginAlert> : null}
			</Form>
		</>
	);
};

export default Login;
