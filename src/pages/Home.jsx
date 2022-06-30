import Slider from '../components/Slider';
import requests from '../config/requests';

const Home = () => {
	return (
		<main>
			<Slider
				title="Fake Flix Originals"
				fetchUrl={requests.fetchFakeflixOriginals}
			/>
			<Slider title="Trending Now" fetchUrl={requests.fetchTrending} />
		</main>
	);
};

export default Home;
