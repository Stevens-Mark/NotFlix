import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/globalProvider';
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
// import components when needed using lazy loading
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TvShows = lazy(() => import('./pages/TvShows'));
const Popular = lazy(() => import('./pages/Popular'));
const Error = lazy(() => import('./pages/Error'));
const Footer = lazy(() => import('./components/Footer'));
const GoToTop = lazy(() => import('./components/GoToTop'));
const renderLoader = () => <div className="loadingStatus">Loading...</div>;

const App = () => {
	return (
		<Suspense fallback={renderLoader()}>
			<Router>
				<GlobalProvider>
					<Header />
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
		</Suspense>
	);
};

export default App;

