import GlobalStyle from './globalStyles';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/HomePage/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NewPost from './pages/NewPost/NewPost';
import NewComment from './pages/NewComment/NewComment';
import Profile from './pages/Profile/Profile';

import { CookiesProvider, CookiesContext } from './utils/cookiesContext';

const useConnected = (cookies) => {
	const [[token, user], setConnectedData] = useState([undefined, undefined]);
	const parsedCookie = (cookies, index) =>
		cookies.split(';').map((cookie) => cookie.split('=')[1]);
	useEffect(() => {
		if (!cookies) {
			setConnectedData([undefined, undefined]);
			return;
		}
		setConnectedData(parsedCookie(cookies));
	}, [cookies]);
	return [user, token];
};

const Layout = () => {
	const { cookies } = useContext(CookiesContext);
	const [currentUser, token] = useConnected(cookies);

	const parseJwt = (token) => {
		try {
			return JSON.parse(atob(token.split('.')[1]));
		} catch (e) {
			return null;
		}
	};

	let role = token ? parseJwt(token)?.role : null;

	return (
		<Router>
			<GlobalStyle />
			<Navbar connected={token}></Navbar>
			<Switch>
				<Route
					path="/"
					exact
					component={() => (
						<Home
							role={role}
							connected={token}
							currentUser={parseInt(currentUser)}
						/>
					)}
				/>
				<Route path="/login" exact component={Login} />
				<Route path="/register" exact component={Register} />

				<Route
					path="/newpost"
					exact
					component={() => (
						<NewPost token={token} currentUser={parseInt(currentUser)} />
					)}
				/>
				<Route
					path="/newcomment/:id"
					exact
					component={() => (
						<NewComment token={token} currentUser={parseInt(currentUser)} />
					)}
				/>
				<Route
					path="/profile"
					exact
					component={() => <Profile currentUser={parseInt(currentUser)} />}
				/>
			</Switch>
		</Router>
	);
};

function App() {
	return (
		<CookiesProvider>
			<Layout />
		</CookiesProvider>
	);
}

export default App;
