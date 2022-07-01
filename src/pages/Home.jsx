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
	// console.log(randomSelect(dataToLoad).url)
	return (
		<main>
			<Banner fetchUrl={randomSelect(dataToLoad).url} />
		
				{/* <h1 className="sr-only">NotFlix a NetFlix clone</h1> */}

				{dataToLoad.map((data) => (
					<Slider
						key={data.category}
						title={data.category}
						fetchUrl={data.url}
					/>
				))}
			
		</main>
	);
};

export default Home;
