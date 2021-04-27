import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Icon from '../../images/icon.svg';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavMenu,
	NavItem,
	NavLinks,
	Logo,
} from './Navbar.elements';
import { CookiesContext } from '../../utils/cookiesContext';
import { GoHome } from 'react-icons/go';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLock, AiOutlineUnlock } from 'react-icons/ai';
import { FiUserPlus } from 'react-icons/fi';

const Navbar = (props) => {
	const { setCookies } = useContext(CookiesContext);

	const history = useHistory();

	const logout = () => {
		fetch('/users/logout', {
			method: 'GET',
			credentials: 'same-origin',
		})
			.then(() => {
				setCookies(null);
				history.push('/');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/">
						<Logo src={Icon} alt="React Logo" />
						<h1>Groupomania</h1>
					</NavLogo>
					{props.connected ? (
						<NavMenu>
							<NavItem>
								<NavLinks to="/">
									<GoHome></GoHome>
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/newpost">
									<BiMessageSquareAdd />
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/profile">
									<CgProfile />
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/" onClick={logout}>
									<AiOutlineLock />
								</NavLinks>
							</NavItem>
						</NavMenu>
					) : (
						<NavMenu>
							<NavItem>
								<NavLinks to="/">
									<GoHome></GoHome>
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/register">
									<FiUserPlus />
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/login">
									{' '}
									<AiOutlineUnlock />
								</NavLinks>
							</NavItem>
						</NavMenu>
					)}
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
