import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Section = styled.section`
	margin: auto;
	width: 100%;

	margin: 20px auto;
	display: flex;
	flex-direction: column;
`;

export const Post = styled.div`
	overflow: hidden;
	margin: 20px auto;

	display: flex;
	flex-direction: column;
	width: 100%;

	min-height: 200px;
	border: 1px solid black;
`;

export const PostHeader = styled.h3`
	font-size: 24px;
	font-weight: bold;
	color: white;
	background-color: #4b59f7;
	padding: 5px 10px;
	min-height: 50px;
	line-height: 50px;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const PostTag = styled.span`
	text-transform: capitalize;
`;

export const PostContent = styled.p`
	font-size: 16px;
	background-color: white;
	padding: 20px;
`;

export const PostImage = styled.img`
	margin: 20px auto;
	max-width: 500px;
	max-height: 500px;
	border-radius: 15px;
	box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
`;

export const PostContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: #fff;
`;

export const PostCredentials = styled.p`
	font-size: 16px;

	background-color: white;
	padding: 20px;
`;

export const PostIconsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: #fff;
	font-size: 30px;

	svg {
		min-height: 1em;
		min-width: 1em;
		margin: 5px 50px;
		cursor: pointer;
		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}

	@media screen and (max-width: 768px) {
		width: 50%;
		margin: auto;
		font-size: 20px;
		text-align: center;
		svg {
			margin: 0 25px;
		}
		span {
			right: 25px;
		}
	}
`;

export const NavLinks = styled(Link)`
	color: #000;
	display: flex;
	align-items: center;
	text-decoration: none;

	height: 100%;
	&:hover {
		color: #4b59f7;
		transition: all 0.3s ease;
	}
`;

export const Comment = styled.div`
	border: 1px solid black;
	margin-bottom: 5px;
`;

export const CommentCredentials = styled.div`
	background-color: lightgray;
	padding: 5px;
`;

export const CommentAuthor = styled.span`
	font-weight: bold;
	text-decoration: capitalize;
`;
export const CommentContent = styled.div`
	text-align: center;
	width: 60%;
	margin: 10px auto;
`;

export const LikesCount = styled.span`
	font-size: 16px;
	font-weight: bolder;
	position: relative;
	right: 50px;
`;
