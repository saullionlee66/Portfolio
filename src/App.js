import { HashRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import NewFooter from "./components/NewFooter";
import Project from "./components/Project";

function App() {
	return (
		<HashRouter basename={process.env.PUBLIC_URL} className='App'>
			<NavBar />
			<Switch>
				<Route exact path='/home' component={Home} />
				<Route exact path='/projects' component={Project} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/about' component={About} />
				<Route exact path='/' component={Home} />
			</Switch>
			<NewFooter />
		</HashRouter>
	);
}

export default App;
