import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume/ResumeNew';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

const TRACKING_ID = 'G-M70JDVN313';
ReactGA.initialize(TRACKING_ID);

function App() {
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router basename="/Portfolio">
			<Preloader load={load} />
			<div className="App" id={load ? 'no-scroll' : 'scroll'}>
				<Navbar />
				<ScrollToTop />
				<TrackedRoutes />
				<Footer />
			</div>
		</Router>
	);
}

function TrackedRoutes() {
	const location = useLocation();

	useEffect(() => {
		ReactGA.pageview(location.pathname + location.search);
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
}

export default App;
