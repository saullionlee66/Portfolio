import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Project from "./components/Project";

function App() {
	return (
		<Router className='App'>
			<Nav />
			<Switch>
				<Route exact path='/home' component={Home} />
				<Route exact path='/projects' component={Project} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/about' component={About} />
				<Route exact path='/' component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
