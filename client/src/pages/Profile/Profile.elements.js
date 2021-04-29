import styled from 'styled-components';

export const ProfileDiv = styled.div`
	width: 60%;
	margin: 20px auto;
	background-color: #fff;
	box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
		0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const ProfileHeader = styled.h4`
	color: white;
	font-size: 24px;
	margin: 0 auto;
	background-color: #091f43;
	width: 100%;
	text-align: center;
	height: 40px;
	line-height: 40px;
`;

export const ProfileInfos = styled.div`
	background-color: #fff;
	padding: 10px 0 10px 20px;
	font-size: 20px;

	p {
		padding: 5px 0;
		font-family: 'Lato', sans-serif;
	}
`;
