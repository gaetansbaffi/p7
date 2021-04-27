import styled from 'styled-components';

export const CommentDiv = styled.div`
	background-color: #ffff;
	width: 75%;
	margin: 5px auto;
	border-radius: 10px;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const CommentCredentials = styled.div`
	background-color: #3282b8;
	color: #fff;
	padding: 5px;
`;

export const CommentAuthor = styled.span`
	font-weight: bold;
	text-decoration: capitalize;
`;
export const CommentContent = styled.div`
	text-align: center;
	width: 60%;
	margin: 0 auto;
	font-family: 'Lato', sans-serif;
	padding: 5px;
`;
