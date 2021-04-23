import styled from 'styled-components';

export const Section = styled.section`
	margin: 50px auto;
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const Header = styled.h2`
	font-size: 20px;
	font-weight: bold;
	background-color: #4b59f7;
	color: white;

	line-height: 100px;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const Text = styled.p`
	font-size: 15px;
	background-color: white;
	padding: 10px 10px 0 10px;
`;

export const ImgWrapper = styled.div`
	display: flex;
	background-color: white;
	width: 100%;
	text-align: center;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-bottom-left-radius: 25px;
	border-bottom-right-radius: 25px;
`;

export const Img = styled.img`
	padding-right: 0;
	background-color: white;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 500px;
`;
