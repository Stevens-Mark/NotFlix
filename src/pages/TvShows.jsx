import Banner from '../components/Banner';
import Slider from '../components/Slider';
import { tvShowsList } from '../config/dataToLoad';
import { randomSelect } from '../utils/functions';

/**
 * Renders Movies page with all carousels
 * @function TvShows
 * @returns {JSX}
 */
const TvShows = () => {

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - Movie Page</h1>
			<Banner fetchUrl={randomSelect(tvShowsList).url} />
			{tvShowsList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default TvShows;
