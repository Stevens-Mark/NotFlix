import { NavLink } from 'react-router-dom';
import NotFlixLogo from '../assets/images/notflixLogo.png';

/**
 * Renders navigatin bar at top
 * @function Navigation
 * @returns {JSX} Navigation bar
 */
const Navigation = () => {
	return (
		<header>
			<NavLink activeClassName="active" exact to="/">
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


