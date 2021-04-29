import React, { useState } from 'react';
import {
	Form,
	Input,
	RegisterHeader,
	FormContainer,
	InputBtn,
	RegisterAlert,
} from './Register.elements';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const history = useHistory();
	const { register, handleSubmit } = useForm();
	const [message, setMessage] = useState();

	const onSubmit = (data) => {
		fetch('http://localhost:9000/users/register', {
			method: 'POST',

			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) =>
				response.json().then((data) => {
					if (data.message) {
						setMessage(data.message);
					} else {
						history.push('/');
					}
				})
			)

			.catch((error) => {
				console.log(error);
			});
	};

	// firstname, lastname, job,
	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<RegisterHeader>S'inscire</RegisterHeader>
					<Input
						type="text"
						placeholder="Nom d'utilisateur"
						name="username"
						id="username"
						ref={register}
						required
					/>
					<label htmlFor="username" value="username">
						username
					</label>
					<Input
						type="text"
						placeholder="Prénom"
						name="firstName"
						id="firstName"
						ref={register}
						required
					/>
					<label htmlFor="firstName" value="firstName">
						firstName
					</label>
					<Input
						type="text"
						required
						placeholder="Nom"
						name="lastName"
						id="lastName"
						ref={register}
					/>
					<label htmlFor="lastName" value="lastName">
						lastName
					</label>
					<Input
						type="text"
						required
						placeholder="Emploi"
						name="job"
						id="job"
						ref={register}
					/>
					<label htmlFor="job" value="job">
						job
					</label>
					<Input
						type="text"
						required
						placeholder="Email"
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
						id="password"
						ref={register}
						required
					/>
					<label htmlFor="password" value="password">
						password
					</label>
					<InputBtn type="submit" value="Inscription" />
					{message ? <RegisterAlert>{message}</RegisterAlert> : null}
				</FormContainer>
			</Form>
		</>
	);
};

export default Register;
