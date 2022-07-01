import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFlixLogo from '../assets/images/notflixLogo.png';

const BurgerMenu = () => {
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
		<header className={`top-nav ${navbar ? 'top-nav--active' : ''}`}>
			<NavLink exact to="/">
				<img src={NotFlixLogo} alt="Click to home page" />
			</NavLink>
			<input id="menu-toggle" type="checkbox" />
			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button"></div>
			</label>
			<nav className="menu">
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

export default BurgerMenu;
