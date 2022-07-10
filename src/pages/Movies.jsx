import { useEffect } from 'react';
import Banner from '../components/Banner'; // import components
import Slider from '../components/Slider';
import { moviesList } from '../config/dataToLoad'; // import list of films
import { randomSelect } from '../utils/functions';

/**
 * Renders Movies page with all carousels
 * @function Movies
 * @returns {JSX}
 */
const Movies = () => {
	useEffect(() => {
		document.title = 'NotFlix | Movies';
	}, []);

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - Movie Page</h1>
			<Banner fetchUrl={randomSelect(moviesList).url} />
			{moviesList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Movies;

