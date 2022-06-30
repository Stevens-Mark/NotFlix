import Slider from '../components/Slider';
import { dataToLoad } from '../config/dataToLoad';

/**
 * Renders Home page with all carousels
 * @function Home
 * @returns {JSX}
 */
const Home = () => {
	return (
		<main>
			<h1 className="sr-only">NotFlix a NetFlix clone</h1>
			{dataToLoad.map(data => (
				<Slider key={(data.category)} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Home;
