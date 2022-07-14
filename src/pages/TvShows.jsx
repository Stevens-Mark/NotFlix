import { useEffect } from 'react';
import Banner from '../components/Banner'; // import components
import Slider from '../components/Slidder';
import { tvShowsList } from '../config/dataToLoad'; // import list of tv shows
import { randomSelect } from '../utils/functions';

/**
 * Renders Movies page with all carousels
 * @function TvShows
 * @returns {JSX}
 */
const TvShows = () => {
	useEffect(() => {
		document.title = 'NotFlix | TV Shows';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - Tv Shows Page</h1>
			<Banner fetchUrl={randomSelect(tvShowsList).url} />
			{tvShowsList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default TvShows;

