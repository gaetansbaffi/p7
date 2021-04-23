import React from 'react';
import {
	Form,
	PostHeader,
	FormContainer,
	InputContent,
	InputBtn,
} from './NewComment.elements';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

const NewComment = ({ token }) => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const id = useParams().id;

	const onSubmit = (data) => {
		const dataWithToken = { ...data, token, id };

		fetch(`http://localhost:9000/posts/${id}/comments`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataWithToken),
		})
			.then((response) => response.json())
			.then((data) => {
				history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<PostHeader>Créer un nouveau commentaire</PostHeader>

					<InputContent
						type="text"
						placeholder="Message"
						name="content"
						ref={register}
					/>

					<InputBtn type="submit" value="Créer le commentaire" />
				</FormContainer>
			</Form>
		</>
	);
};

export default NewComment;
