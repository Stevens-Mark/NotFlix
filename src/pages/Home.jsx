import Slider from './components/Slider';
import requests from './config/requests';

const Home = () => {
	return (
		<div className="App">
			<h1>Hello</h1>
			<Slider
				title="Fake Flix Originals"
				fetchUrl={requests.fetchFakeflixOriginals}
			/>
			<Slider title="Trending Now" fetchUrl={requests.fetchTrending} />
		</div>
	);
};

export default Home;
