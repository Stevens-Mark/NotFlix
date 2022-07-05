import Banner from '../components/Banner';
import Slider from '../components/Slider';
import { homeData } from '../config/dataToLoad';
import { randomSelect } from '../utils/functions';

/**
 * Renders Home page with all carousels
 * @function Home
 * @returns {JSX}
 */
const Home = () => {

	return (
		<main>
			<h1 className="sr-only">Welcome to NotFlix - A NetFlix clone</h1>
			<Banner fetchUrl={randomSelect(homeData).url} />
			{homeData.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Home;
