import { useEffect } from 'react';
import Banner from '../components/Banner'; // import components
import Slider from '../components/Slidder';
import { newAndPopularList } from '../config/dataToLoad'; // import list of popular tv/films
import { randomSelect } from '../utils/functions';

/**
 * Renders Popular page with all carousels
 * @function Popular
 * @returns {JSX}
 */
const Popular = () => {
	useEffect(() => {
		document.title = 'NotFlix | Popular';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - Popular Page</h1>
			<Banner fetchUrl={randomSelect(newAndPopularList).url} />
			{newAndPopularList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Popular;

