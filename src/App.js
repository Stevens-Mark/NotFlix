import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Home}/>
				{/* <Route path="/tvshows" component={DashBoard}/>
				<Route path="/popular" component={UnderConstruction}/>
				<Route path="/mylist" component={UnderConstruction}/>
				{/* <Route component={Error}/> */}
			</Switch> 
	</Router>
	)
};

export default App;

