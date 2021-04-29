import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #091f43;
	width: 100%;
	height: 80px;
	@media screen and (max-width: 768px) {
		height: 120px;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	margin: 10px auto;
`;

export const NavLogo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 36px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		font-size: 25px;
		align-items: flex-start;
		text-align: center;
		margin-left: 8px;
	}
`;

export const Logo = styled.img`
	width: 60px;
	align-self: center;
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	color: #fff;
	text-align: center;
`;

export const NavItem = styled.li`
	padding: 8px;
	cursor: pointer;
	font-size: 20px;
	transition: all 0.3s ease;

	svg {
		height: 30px;
		width: 30px;
	}
	&:hover {
		color: #1b262c;
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;

	height: 100%;
	&:hover {
		color: #1b262c;
		transition: all 0.3s ease;
	}

	p {
		display: none;
	}
`;
