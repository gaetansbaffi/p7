import {
	CommentContent,
	CommentDiv,
	CommentCredentials,
	CommentAuthor,
} from './Comment.elements';

const Comment = (props) => {
	return (
		<CommentDiv key={props.id}>
			<CommentCredentials>
				<CommentAuthor>{props.username}</CommentAuthor> le{' '}
				{props.date.split('T')[0]}
			</CommentCredentials>
			<CommentContent>{props.content}</CommentContent>
		</CommentDiv>
	);
};

export default Comment;
