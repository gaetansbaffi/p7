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
								<NavLinks to="/">Accueil</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/newpost">Créer un post</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/profile">Profil</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/" onClick={logout}>
									Se Déconnecter
								</NavLinks>
							</NavItem>
						</NavMenu>
					) : (
						<NavMenu>
							<NavItem>
								<NavLinks to="/">Accueil</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/login">Se Connecter</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks to="/register">S'enregistrer</NavLinks>
							</NavItem>
						</NavMenu>
					)}
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
