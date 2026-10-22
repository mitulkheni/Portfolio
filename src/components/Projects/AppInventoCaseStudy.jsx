import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Particle from '../Particle';
import Reveal from '../Reveal';
import appinventoImg from '../../Assets/Projects/AppInvento.jpg';

function AppInventoCaseStudy() {
	return (
		<Container fluid className="case-study-section">
			<Particle />
			<Container>
				<Reveal>
					<Link to="/project" className="case-study-back-link">
						<AiOutlineArrowLeft /> Back to Projects
					</Link>
				</Reveal>

				<Reveal delay={0.05}>
					<h1 className="project-heading" style={{ marginTop: '16px' }}>
						<strong className="purple">AppInvento</strong> — Backend Case Study
					</h1>
					<p className="case-study-subtitle">
						Backend Developer / Architect · AI platform that builds and deploys
						full-stack apps from natural-language prompts
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<img
						src={appinventoImg}
						alt="AppInvento"
						className="img-fluid case-study-hero-img"
					/>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Problem</h2>
					<p className="case-study-body">
						Getting from an idea to a live web app still means stitching
						together a frontend, an API, a database, and hosting before a single
						user sees anything. AppInvento's pitch is to collapse all of that:
						describe the product in plain language, and the platform generates
						the full stack and deploys it. That pitch puts a lot of weight on
						the backend. Turning a prompt into a running app isn't a quick
						request and response — it's a multi-step job that takes time, every
						generated project needs somewhere to live once it's built, and a
						product sold on plans and credits needs billing it can trust.
					</p>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Architecture</h2>
					<p className="case-study-body">
						I built the backend around four core responsibilities:
					</p>
					<ul className="case-study-list">
						<li>
							<b className="purple">REST APIs</b> — the API layer the AppInvento
							client relies on to create, manage, and deploy projects.
						</li>
						<li>
							<b className="purple">Queue management</b> — work that takes time
							runs through queues instead of inside a single request, keeping
							the API responsive while jobs are processed in the background.
						</li>
						<li>
							<b className="purple">Payment gateway integration</b> — AppInvento
							is sold on subscription plans and credits, including on-demand
							top-ups, so the backend integrates a payment gateway to take
							payment for them.
						</li>
						<li>
							<b className="purple">Project hosting</b> — every project the
							platform generates needs to end up live, so the hosting layer is
							what takes a finished app and publishes it.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<div className="arch-diagram">
						<div className="arch-row">
							<div className="arch-box">
								AppInvento Client
								<span>Describe an idea in plain language</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓ REST API</div>
						<div className="arch-row">
							<div className="arch-box">
								Backend
								<span>REST APIs · Core backend services</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row arch-row-split">
							<div className="arch-box">
								Queue Management
								<span>Background job processing</span>
							</div>
							<div className="arch-box">
								Payment Gateway
								<span>Plans · Credit top-ups</span>
							</div>
							<div className="arch-box">
								Project Hosting
								<span>Publishes generated apps</span>
							</div>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">What I Built</h2>
					<ul className="case-study-list">
						<li>
							The REST APIs behind AppInvento's client — creating, managing, and
							deploying projects.
						</li>
						<li>
							Queue management, so work that takes time is processed in the
							background instead of tying up requests.
						</li>
						<li>
							Payment gateway integration for the platform's paid plans and
							credit top-ups.
						</li>
						<li>
							Project hosting, so the full-stack apps AppInvento generates
							actually go live.
						</li>
						<li>
							Other core backend services that the rest of the platform depends
							on.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">Why It Mattered</h2>
					<p className="case-study-body">
						A prompt-to-app product only feels effortless if everything behind
						the prompt box is dependable. Queues keep slow work from blocking
						the API, billing has to be right every time money or credits change
						hands, and hosting is the last mile that turns a generated app into
						something a person can actually share. AppInvento is still under
						active development, and the backend keeps evolving alongside it.
					</p>
				</Reveal>

				<Reveal>
					<div className="case-study-cta">
						<Button
							variant="primary"
							href="https://app.appinvento.io/"
							target="_blank"
						>
							Visit AppInvento
						</Button>
						<Button
							variant="outline-light"
							as={Link}
							to="/project"
							className="case-study-back-btn"
						>
							Back to Projects
						</Button>
					</div>
				</Reveal>
			</Container>
		</Container>
	);
}

export default AppInventoCaseStudy;
