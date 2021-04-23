import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #4b59f7;
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
`;

export const NavLogo = styled(Link)`
	text-decoration: none;
	color: #fff;
	font-size: 36px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;

export const Logo = styled.img`
	width: 60px;
`;

export const NavMenu = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	list-style: none;
	color: #fff;
	text-align: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		font-weight: regular;
		font-size: 12px;
		padding: 10px;
	}
`;

export const NavItem = styled.li`
	padding: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: all 0.3s ease;

	font-weight: bold;
	&:hover {
		color: lightgray;
	}

	@media screen and (max-width: 768px) {
		font-weight: regular;
		font-size: 16px;
	}
`;

export const NavLinks = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;

	height: 100%;
	&:hover {
		color: lightgray;
		transition: all 0.3s ease;
	}
`;
