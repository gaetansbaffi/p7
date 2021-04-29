import React from 'react';
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
	LikesCount,
	PostTag,
} from './Posts.elements';
import Tags from '../Tags/Tags';
import Comments from '../Comments/Comments';
import { useEffect, useState } from 'react';
import { AiFillDelete as DeleteIcon } from 'react-icons/ai';
import { BiCommentAdd } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const Posts = (props) => {
	const [posts, setPosts] = useState([]);
	const [tags, setTags] = useState([]);

	//loading posts and tags
	useEffect(() => {
		loadPosts();
		loadTags();
	}, []);

	const loadPosts = async () => {
		const response = await fetch('/posts');
		const data = await response.json();

		setPosts(data.reverse());
	};

	//delete post function
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
	//tags logic
	const showAllPosts = () => {
		let posts = document.getElementsByClassName(`post`);
		let tags = document.getElementsByClassName(`tag`);
		loadTags();
		for (const post of posts) {
			post.style.display = 'block';
		}
		for (const tag of tags) {
			tag.style.display = 'inline-block';
		}
	};

	const showPostsWithTags = (tag) => {
		let posts = document.getElementsByClassName(`post`);
		let tags = document.getElementsByClassName(`tag`);

		for (const post of posts) {
			if (!post.className.includes(`${tag} post`, 0)) {
				post.style.display = 'none';
			}
		}
		for (const tag of tags) {
			tag.style.display = 'none';
		}
	};

	//comments
	const loadComments = async (id) => {
		const response = await fetch(`/posts/${id}/comments`);
		const data = await response.json();
		const values = Promise.resolve(data);
		return values;
	};

	const showComments = (e) => {
		const parentElement = e.target.parentNode.parentNode.querySelector(
			'.comments'
		);

		if (parentElement != null) {
			parentElement.style.display === 'block'
				? (parentElement.style.display = 'none')
				: (parentElement.style.display = 'block');
		}
	};

	// likes

	const likePost = (id) => {
		let data = { user_id: props.currentUser };

		fetch(`http://localhost:9000/posts/${id}/likes`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((response) => {
				loadPosts();
			})

			.catch((error) => {
				console.log(error);
			});
	};

	const renderPosts = posts.map((post) => {
		let likes = post.likersCount;

		return (
			<Post key={post.id} className={post.tag + ' post'}>
				<PostHeader>
					<PostTag>{post.tag}</PostTag> | {post.title}
				</PostHeader>

				<PostContentWrapper>
					{post.img && <PostImage alt={post.tag} src={post.img}></PostImage>}
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
						<p>Comment</p>
						<BiCommentAdd />
					</NavLinks>
					{/* Show comments */}
					<FaRegComments onClick={(event) => showComments(event)}>
						Commentaires
					</FaRegComments>
					{/* Delete Post */}
					{(props.currentUser === post.author || props.role === 'admin') && (
						<DeleteIcon onClick={() => deletePost(post.id)} />
					)}
				</PostIconsWrapper>

				<Comments data={loadComments(post.id)} id={post.id} />
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
			<Comments data={loadComments(20)} />
		</Section>
	);
};

export default Posts;
