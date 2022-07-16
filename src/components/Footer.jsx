import { NavLink } from 'react-router-dom';
import NotFlixLogo from '../assets/images/notflixLogo.png';
import { getYear } from '../utils/functions';
import myLogo from '../assets/logos/logoM.webp';
/**
 * Renders the footer on each page
 * @function Footer
 * @returns {JSX}
 */
const Footer = () => {
	return (
		<footer className="footer">
				<span className="footer__left">
					<img src={myLogo} alt="logo" />
					<span>Created by Mark Stevens</span>
				</span>
				<span className="footer__middle">
					<NavLink exact to="/">
						<img src={NotFlixLogo} alt="Click to home page" />
					</NavLink>
					<p>© Copyright {getYear()} NotFlix</p>
				</span>
				<p className="footer__right">Powered by TMDB</p>
		</footer>
	);
};

export default Footer;

