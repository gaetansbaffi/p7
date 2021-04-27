import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #3282b8;
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
		font-size: 36px;
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
	padding: 8px;
	cursor: pointer;
	font-size: 20px;
	transition: all 0.3s ease;
	letter-spacing: -2px;

	&:hover {
		color: #1b262c;
	}

	@media screen and (max-width: 768px) {
		font-weight: regular;
		font-size: 16px;
		padding: 4px;
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
`;
