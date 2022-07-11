import { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * Component to render Error 404 page
 * @function Error
 * @returns {JSX}
 */
const Error = () => {
	useEffect(() => {
		document.title = 'NotFlix | Error';
	}, []);

	return (
		<main className="notification">
			<div className="notification__text">
				<h1>404</h1>
				<p>Oups! The page doesn't exist</p>
				<Link to="/">Return to the Home Page</Link>
			</div>
		</main>
	);
};

export default Error;

