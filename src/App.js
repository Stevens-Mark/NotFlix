import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/globalProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvShows from './pages/TvShows';
import Popular from './pages/Popular';
import Error from './pages/Error';
import GoToTop from './components/GoToTop';
import Modal from './components/modal';

const App = () => {
	return (
		<Router>
			<GlobalProvider>
				<Header />
				<Modal />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/movies" component={Movies} />
					<Route path="/tvshows" component={TvShows} />
					<Route path="/popular" component={Popular} />
					{/* 	<Route path="/mylist" component={UnderConstruction}/> */}
					<Route component={Error} />
				</Switch>
				<Footer />
				<GoToTop />
			</GlobalProvider>
		</Router>
	);
};

export default App;

