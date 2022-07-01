import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NotFlixLogo from '../assets/images/notflixLogo.png';

/**
 * Renders navigatin bar at top
 * @function Navigation
 * @returns {JSX} Navigation bar
 */
const Navigation = () => {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		//navbar scroll changeBackground function
		const changeBackground = () => {
			if (window.scrollY >= 66) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		};

		// adding the event when scroll change background
		window.addEventListener('scroll', changeBackground);
		return () => window.removeEventListener('scroll', changeBackground);
	});

	return (
		<header className={navbar ? 'header header--active' : 'header'}>
			<NavLink exact to="/">
				<img src={NotFlixLogo} alt="Click to home page" />
			</NavLink>
			<nav>
				<NavLink activeClassName="active" exact to="/">
					Home
				</NavLink>
				<NavLink activeClassName="active" to="/tvshows">
					TV Shows
				</NavLink>
				<NavLink activeClassName="active" to="/popular">
					New & Popular
				</NavLink>
				<NavLink activeClassName="active" to="/mylist">
					My List
				</NavLink>
			</nav>
		</header>
	);
};

export default Navigation;
