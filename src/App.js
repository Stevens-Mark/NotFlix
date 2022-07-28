import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContextProvider } from './context/globalProvider';
import React, { lazy, Suspense } from 'react';
import Header from './components/Header';
import ScrollIndicator from './components/ScrollIndicator';
// import VideoPlayer from './components/player/YouTubeModal';
// import Modal from './components/modal';
// import components when needed using lazy loading
const Modal = lazy(() => import('./components/modal'));
const VideoPlayer = lazy(() => import('./components/player/YouTubeModal'));
const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const TvShows = lazy(() => import('./pages/TvShows'));
const Popular = lazy(() => import('./pages/Popular'));
const MyWatchList = lazy(() => import('./pages/WatchList'));
const Search = lazy(() => import('./pages/Search'));
const AnimationIntro = lazy(() => import('./components/AnimationIntro'));
const Error = lazy(() => import('./pages/Error'));
const Footer = lazy(() => import('./components/Footer'));
const GoToTop = lazy(() => import('./components/GoToTop'));
const renderLoader = () => <div className="loadingStatus">Loading ...</div>;

const App = () => {
	return (
		<Suspense fallback={renderLoader()}>
			<Router>
				<ContextProvider>
					<ScrollIndicator />
					<VideoPlayer />
					<Modal />
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/movies" component={Movies} />
						<Route path="/tvshows" component={TvShows} />
						<Route path="/popular" component={Popular} />
						<Route path="/mywatchlist" component={MyWatchList}/>
						<Route path="/search" component={Search}/>
						<Route path="/animation" component={AnimationIntro}/>
						<Route component={Error} />
					</Switch>
					<Footer />
					<GoToTop />
				</ContextProvider>
			</Router>
		</Suspense>
	);
};

export default App;

