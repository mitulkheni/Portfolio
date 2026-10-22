import React, { useState, useEffect, lazy, Suspense } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
// Strikezone is hidden for now. To restore it, uncomment this import and the route below.
// import StrikezoneCaseStudy from './components/Projects/StrikezoneCaseStudy';
import AppInventoCaseStudy from './components/Projects/AppInventoCaseStudy';
import MoveworkCaseStudy from './components/Projects/MoveworkCaseStudy';
import WinchurchCaseStudy from './components/Projects/WinchurchCaseStudy';
import Footer from './components/Footer';
import Contact from './components/Contact/Contact';
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
import { useLocation } from 'react-router-dom';

// pdf.js is large and only the Resume page needs it, so load it on demand.
const Resume = lazy(() => import('./components/Resume/ResumeNew'));

function App() {
	const [load, updateLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			updateLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router basename={import.meta.env.BASE_URL}>
			<Preloader load={load} />
			<div className="App" id={load ? 'no-scroll' : 'scroll'}>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<Navbar />
				<ScrollToTop />
				<main id="main-content">
					<AppRoutes />
				</main>
				<Footer />
			</div>
		</Router>
	);
}

const SITE_TITLE = 'Mitul Kheni';
const PAGE_TITLES = {
	'/': `${SITE_TITLE} | Freelance Backend Developer (Node.js, NestJS)`,
	'/about': `About | ${SITE_TITLE}`,
	'/project': `Projects | ${SITE_TITLE}`,
	'/project/appinvento': `AppInvento Case Study | ${SITE_TITLE}`,
	'/project/movework': `Movework Case Study | ${SITE_TITLE}`,
	'/project/winchurch': `Winchurch Services Case Study | ${SITE_TITLE}`,
	'/resume': `Resume | ${SITE_TITLE}`,
	'/contact': `Contact | ${SITE_TITLE}`,
};

function AppRoutes() {
	const location = useLocation();

	useEffect(() => {
		document.title = PAGE_TITLES[location.pathname] || PAGE_TITLES['/'];
	}, [location]);

	return (
		<Suspense fallback={null}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/project" element={<Projects />} />
				{/* <Route path="/project/strikezone" element={<StrikezoneCaseStudy />} /> */}
				<Route path="/project/appinvento" element={<AppInventoCaseStudy />} />
				<Route path="/project/movework" element={<MoveworkCaseStudy />} />
				<Route path="/project/winchurch" element={<WinchurchCaseStudy />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Suspense>
	);
}

export default App;
