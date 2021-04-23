import React from 'react';
import ReactDOM from 'react-dom';
import {
	Section,
	Post,
	PostHeader,
	PostContent,
	PostContentWrapper,
	PostCredentials,
	PostIconsWrapper,
	PostImage,
	NavLinks,
	CommentContent,
	Comment,
	CommentCredentials,
	CommentAuthor,
	LikesCount,
} from './Posts.elements';
import Tags from '../Tags/Tags';
import { useEffect, useState } from 'react';
import { AiFillDelete as DeleteIcon } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const Posts = (props) => {
	const [posts, setPosts] = useState([]);
	const [tags, setTags] = useState([]);
	useEffect(() => {
		loadPosts();
		loadTags();
	}, []);

	const loadPosts = async () => {
		const response = await fetch('/posts');
		const data = await response.json();
		setPosts(data);
	};

	const deletePost = (id) => {
		let data = { token: props.token, user_id: props.currentUser };

		fetch(`http://localhost:9000/posts/${id}`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => {
				loadPosts();
				loadTags();
				response.json();
			})

			.catch((error) => {
				console.log(error);
			});
	};
	//Tags

	const loadTags = async () => {
		const response = await fetch('/tags');
		const data = await response.json();
		setTags(data);
	};

	const showAllPosts = () => {
		let posts = document.getElementsByClassName(`post`);
		loadTags();
		for (const post of posts) {
			post.style.display = 'block';
		}
	};

	const showPostsWithTags = (tag) => {
		let posts = document.getElementsByClassName(`post`);

		for (const post of posts) {
			if (!post.className.includes(`${tag} post`, 0)) {
				console.log(post, post.className);
				post.style.display = 'none';
			}
		}
	};

	//comments
	const loadComments = async (id) => {
		const response = await fetch(`/posts/${id}/comments`);
		const data = await response.json();

		return data;
	};

	const showComments = (comments) => {
		const Comments = comments.map((comment) => (
			<Comment>
				<CommentCredentials>
					<CommentAuthor>{comment.username}</CommentAuthor> le{' '}
					{comment.date.split('T')[0]}
				</CommentCredentials>
				<CommentContent>{comment.content}</CommentContent>
			</Comment>
		));

		return Comments;
	};

	// likes

	const likePost = (id) => {
		let data = { token: props.token, user_id: props.currentUser };
		console.log('click');
		fetch(`http://localhost:9000/posts/${id}/likes`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => {
				loadPosts();
				response.json();
				console.log(response);
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const renderPosts = posts.map((post) => {
		let comments;

		let likes = post.likersCount;
		console.log(post.author, props.currentUser);
		return (
			<Post key={post.id} className={post.tag + ' post'}>
				<PostHeader>
					{post.tag} / {post.title}
				</PostHeader>

				<PostContentWrapper>
					{post.img && <PostImage src={post.img}></PostImage>}
					<PostContent>{post.content}</PostContent>
				</PostContentWrapper>

				<PostCredentials>
					Créé le {post.date_time.split('T')[0]} par {post.username}
				</PostCredentials>

				<PostIconsWrapper>
					{/* Like icon */}
					<AiOutlineLike onClick={() => likePost(post.id)} />
					<LikesCount>{likes}</LikesCount>
					{/* New comment */}
					<NavLinks to={'/newcomment/' + post.id}>
						<BiCommentAdd />
					</NavLinks>
					{/* Show comments */}
					<FaRegComments
						onClick={() => {
							loadComments(post.id).then((data) => {
								if (!comments) {
									comments = showComments(data);

									ReactDOM.render(
										comments,
										document.getElementById(`${post.id}`)
									);
								} else {
									comments = null;
									ReactDOM.render(
										comments,
										document.getElementById(`${post.id}`)
									);
								}
							});
						}}
					>
						Commentaires
					</FaRegComments>
					{/* Delete Post */}
					{(props.currentUser === post.author || props.role === 'admin') && (
						<DeleteIcon onClick={() => deletePost(post.id)} />
					)}
				</PostIconsWrapper>

				<PostContent id={post.id}>{comments}</PostContent>
			</Post>
		);
	});

	return (
		<Section>
			<Tags
				tagsList={tags}
				click={showPostsWithTags}
				clickAll={showAllPosts}
			></Tags>
			{renderPosts}
		</Section>
	);
};

export default Posts;
