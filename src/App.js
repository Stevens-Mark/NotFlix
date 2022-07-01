import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<BurgerMenu />
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

