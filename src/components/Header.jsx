import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NotFlixLogo from '../assets/images/notflixLogo.png';
import SearchInput from './SearchInput';

/**
 * @function Header
 * @returns {JSX} Header Navigation Bar
 */
const Header = () => {
	
	const [changeColor, setChangeColor] = useState(false);

	useEffect(() => {
		const changeBackground = () => {
			if (window.scrollY >= 66) {
				setChangeColor(true);
			} else {
				setChangeColor(false);
			}
		};

		// initiate listener for scroll to change background
		window.addEventListener('scroll', changeBackground);
		// detach on unmount
		return () => window.removeEventListener('scroll', changeBackground);
	});

	return (
		<header className={`menu-nav ${changeColor ? 'menu-nav--active' : ''}`}>
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

