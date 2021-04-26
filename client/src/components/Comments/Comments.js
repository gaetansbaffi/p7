import React from 'react';
import { useState, useEffect } from 'react';
import Comment from '../Comment/Comment';
import { CommentsDiv } from './Comments.elements';
const Comments = ({ id, data }) => {
	const [CommentsArr, setCommentsArr] = useState([]);

	useEffect(() => {
		data.then((values) => {
			setCommentsArr(values);
		});
	}, []);

	const renderComments =
		CommentsArr.length > 0 ? (
			CommentsArr.map((comment) => {
				return (
					<Comment
						key={comment.id}
						id={comment.id}
						username={comment.username}
						date={comment.date}
						content={comment.content}
					/>
				);
			})
		) : (
			<p>Aucun commentaire</p>
		);

	return <CommentsDiv className="comments">{renderComments}</CommentsDiv>;
};

export default Comments;
