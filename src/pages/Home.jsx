import { useEffect } from 'react';
import Banner from '../components/Banner'; // import components
import Slider from '../components/Slidder';
import { homeList } from '../config/dataToLoad'; // import home page list
import { randomSelect } from '../utils/functions';

/**
 * Renders Home page with all carousels
 * @function Home
 * @returns {JSX}
 */
const Home = () => {
	useEffect(() => {
		document.title = 'NotFlix | Home';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main>
			<h1 className="sr-only">
				Welcome to NotFlix - A NetFlix clone Home Page
			</h1>
			<Banner fetchUrl={randomSelect(homeList).url} />
			{homeList.map((data) => (
				<Slider key={data.category} title={data.category} fetchUrl={data.url} />
			))}
		</main>
	);
};

export default Home;

