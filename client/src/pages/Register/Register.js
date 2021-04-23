import React from 'react';
import {
	Form,
	Input,
	RegisterHeader,
	FormContainer,
	InputBtn,
} from './Register.elements';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Register = () => {
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		fetch('http://localhost:9000/users/register', {
			method: 'POST',

			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				history.push('/');
			})
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
						ref={register}
					/>
					<Input
						type="text"
						placeholder="Prénom"
						name="firstName"
						ref={register}
					/>
					<Input type="text" placeholder="Nom" name="lastName" ref={register} />
					<Input type="text" placeholder="Emploi" name="job" ref={register} />
					<Input type="text" placeholder="Email" name="email" ref={register} />
					<Input
						type="password"
						placeholder="Mot de passe"
						name="password"
						ref={register}
					/>
					<InputBtn type="submit" value="Inscription" />
				</FormContainer>
			</Form>
		</>
	);
};

export default Register;
