import NotFlixLogo from '../assets/images/notflixLogo.png';

const LoadError = () => {
	return (
		<>
			<img src={NotFlixLogo} alt="" />
			<p>Oops, There was a problem retrieving the information...</p>
		</>
	);
};

export default LoadError;