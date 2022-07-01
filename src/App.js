import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" component={Home}/>
				{/* <Route path="/tvshows" component={DashBoard}/>
				<Route path="/popular" component={UnderConstruction}/>
				<Route path="/mylist" component={UnderConstruction}/>
				{/* <Route component={Error}/> */}
			</Switch>
			<Footer />
	</Router>
	)
};

export default App;

