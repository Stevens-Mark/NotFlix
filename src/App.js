import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Movies from './pages/Movies';
// import TvShows from './pages/TvShows';
import Error from './pages/Error';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}/>
				 {/* <Route path="/movies" component={Movies} /> */}
				 {/* <Route path="/tvshows" component={TvShows}/> */}
				{/* <Route path="/popular" component={UnderConstruction}/>
				<Route path="/mylist" component={UnderConstruction}/> */}
				<Route component={Error}/>
			</Switch>
			<Footer />
	</Router>
	)
};

export default App;

