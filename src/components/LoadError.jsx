import NotFlixLogo from '../assets/images/notflixLogo.png';

/**
 * Renders error messages if data is not available
 * @function LoadError
 * @returns {JSX}
 */
const LoadError = () => {
	return (
		<>
			<img src={NotFlixLogo} alt="" />
			<p>Oops, There was a problem retrieving the information...</p>
		</>
	);
};

export default LoadError;