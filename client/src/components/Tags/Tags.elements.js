import styled from 'styled-components';

export const TagsContainer = styled.div`
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
`;
export const TagButton = styled.button`
	font-family: 'Arvo', serif;
	background-color: #3282b8;
	color: #fff;
	min-height: 24px;
	width: 120px;
	margin: 5px 2px;
	font-size: 15px;
	font-weight: bold;
	text-transform: capitalize;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	&:hover {
		background-color: #0f4c75;
	}
`;
