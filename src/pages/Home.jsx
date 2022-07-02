import Banner from '../components/Banner';
import Slider from '../components/Slider';
import { dataToLoad } from '../config/dataToLoad';
import { randomSelect } from '../utils/functions';

/**
 * Renders Home page with all carousels
 * @function Home
 * @returns {JSX}
 */
const Home = () => {

	
	return (
		<main>
			<Banner fetchUrl={randomSelect(dataToLoad).url} />
			{dataToLoad.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Home;
