import Banner from '../components/Banner';
import Slider from '../components/Slider';
import { newAndPopularList } from '../config/dataToLoad';
import { randomSelect } from '../utils/functions';

/**
 * Renders Movies page with all carousels
 * @function TvShows
 * @returns {JSX}
 */
const Popular = () => {

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - Movie Page</h1>
			<Banner fetchUrl={randomSelect(newAndPopularList).url} />
			{newAndPopularList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Popular;
