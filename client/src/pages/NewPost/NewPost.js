import React from 'react';
import {
	Form,
	Input,
	PostHeader,
	FormContainer,
	InputContent,
	InputBtn,
} from './NewPost.elements';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const NewPost = ({ token }) => {
	const { register, handleSubmit } = useForm();
	const history = useHistory();

	const onSubmit = (data) => {
		const dataWithToken = { ...data, token };

		fetch('http://localhost:9000/posts/create', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(dataWithToken),
		})
			.then((response) => response.json())
			.then((data) => {
				history.push('/');
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormContainer>
					<PostHeader>Créer un nouveau post</PostHeader>
					<Input type="text" placeholder="Tag" name="tag" ref={register} />
					<Input type="text" placeholder="Titre" name="title" ref={register} />
					<Input
						type="url"
						placeholder="Url de l'image"
						name="imgUrl"
						ref={register}
					/>
					<InputContent
						type="text"
						placeholder="Message"
						name="content"
						ref={register}
					/>

					<InputBtn type="submit" value="Créer le post" />
				</FormContainer>
			</Form>
		</>
	);
};

export default NewPost;
