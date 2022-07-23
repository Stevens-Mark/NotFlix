import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFlixLogo from '../assets/images/notflixLogo.png';
import SearchInput from './SearchInput';

/**
 * @function Header
 * @returns {JSX} Header Navigation Bar
 */
const Header = () => {
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
		<header className={`menu-nav ${navbar ? 'menu-nav--active' : ''}`}>
			<NavLink exact to="/animation">
				<img
					className="menu-nav__logo"
					src={NotFlixLogo}
					alt="Click to home page"
				/>
			</NavLink>

			<input id="menu-toggle" type="checkbox" />

			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button"></div>
			</label>

			<nav className="menu">
				<ul>
					<li>
						<NavLink activeClassName="active" exact to="/">
							Home
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="active" to="/tvshows">
							TV Shows
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="active" to="/movies">
							Movies
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="active" to="/popular">
							New & Popular
						</NavLink>
					</li>

					<li>
						<NavLink activeClassName="active" to="/mywatchlist">
							My List
						</NavLink>
					</li>

					<li className="menu__lastItem">
						<SearchInput />
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

