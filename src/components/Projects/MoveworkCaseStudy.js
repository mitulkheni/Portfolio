import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Particle from '../Particle';
import Reveal from '../Reveal';
import moveworkImg from '../../Assets/Projects/Movework.png';

function MoveworkCaseStudy() {
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
						<strong className="purple">Movework</strong> — Backend Case Study
					</h1>
					<p className="case-study-subtitle">
						Sole Backend Developer · Two-sided job marketplace for Israel's
						trades
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<img
						src={moveworkImg}
						alt="Movework"
						className="img-fluid case-study-hero-img"
					/>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Problem</h2>
					<p className="case-study-body">
						Israel's residential and commercial trades — plumbing, carpentry,
						and similar home and business work — didn't have a dedicated
						marketplace connecting job posters with contractors. Generic
						freelance platforms aren't built for how trades work actually
						happens: posters need to reach nearby contractors fast, payment
						needs to be trusted by both sides, and everyone involved needs to
						hear about job updates immediately, not whenever they next open a
						browser tab.
					</p>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Architecture</h2>
					<p className="case-study-body">
						I owned the backend end to end and built it around four
						integrations sitting on a document data store:
					</p>
					<ul className="case-study-list">
						<li>
							<b className="purple">Google SSO</b> — authentication through
							Google OAuth, so contractors and job posters can sign up and log
							in without another password to manage.
						</li>
						<li>
							<b className="purple">PayPlus</b> — Israeli payment gateway
							integration handling the money side of every job, so payment
							between poster and contractor is secure and trusted by both
							parties.
						</li>
						<li>
							<b className="purple">Inforu SMS</b> — SMS delivery for job
							updates, reaching contractors and posters who are on a job site,
							not at a desk.
						</li>
						<li>
							<b className="purple">Firebase push notifications</b> —
							real-time in-app alerts for new jobs, offers, and status
							changes.
						</li>
						<li>
							<b className="purple">MongoDB</b> — a flexible document model
							for jobs, users, and transactions that could evolve as the
							platform's job-matching rules evolved.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<div className="arch-diagram">
						<div className="arch-row">
							<div className="arch-box">
								Movework Clients
								<span>Contractors · Job Posters</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓ REST API</div>
						<div className="arch-row">
							<div className="arch-box">
								Node.js Backend
								<span>Auth · Job posting &amp; matching · Payments · Notifications</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row arch-row-split">
							<div className="arch-box">
								Google SSO
								<span>Authentication</span>
							</div>
							<div className="arch-box">
								PayPlus
								<span>Payments</span>
							</div>
							<div className="arch-box">
								Inforu
								<span>SMS</span>
							</div>
							<div className="arch-box">
								Firebase
								<span>Push notifications</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row">
							<div className="arch-box">
								MongoDB
								<span>Jobs · Users · Transactions</span>
							</div>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">What I Built</h2>
					<ul className="case-study-list">
						<li>
							The complete backend from scratch — authentication, job
							posting and matching, payments, and notifications.
						</li>
						<li>
							Google SSO integration for frictionless signup and login on both
							sides of the marketplace.
						</li>
						<li>
							PayPlus payment integration so contractors get paid and job
							posters can pay with confidence.
						</li>
						<li>
							Inforu SMS and Firebase push notification pipelines, so job
							updates reach people wherever they are.
						</li>
						<li>
							The MongoDB data layer underneath jobs, users, and transactions.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">Why It Mattered</h2>
					<p className="case-study-body">
						As the only backend developer on the project, every one of these
						pieces had to work together reliably from day one. SMS and push
						notifications keep contractors and job posters connected even when
						they're on-site rather than at a screen, secure payments build the
						trust a two-sided marketplace needs to keep both sides coming
						back, and Google SSO keeps onboarding low-friction — all of which
						matter more for a marketplace than almost any single feature,
						since a marketplace only works once enough people trust it to use
						it.
					</p>
				</Reveal>

				<Reveal>
					<div className="case-study-cta">
						<Button
							variant="primary"
							href="https://www.ha-aver.com/"
							target="_blank"
						>
							Visit Movework
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

export default MoveworkCaseStudy;
