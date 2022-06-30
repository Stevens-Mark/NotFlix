import { NavLink } from 'react-router-dom';
import NotFlixLogo from '../assets/images/notflixLogo.png';

/**
 * Renders the footer on each page
 * @function Footer
 * @returns {JSX}
 */
const Footer = () => {
	return (
		<footer>
			<NavLink exact to="/">
				<img src={NotFlixLogo} alt="Click to home page" />
			</NavLink>
			<p>Copyright 2020 NotFlix</p>
		</footer>
	);
};

export default Footer;
