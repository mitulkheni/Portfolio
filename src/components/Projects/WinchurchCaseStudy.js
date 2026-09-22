import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Particle from '../Particle';
import Reveal from '../Reveal';
import winchurchImg from '../../Assets/Projects/Winchurch.jpg';

function WinchurchCaseStudy() {
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
						<strong className="purple">Winchurch Services</strong> — Data
						Engineering Case Study
					</h1>
					<p className="case-study-subtitle">
						Scraping Bot &amp; Reconciliation Engine · Automated HMRC data
						collection at scale
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<img
						src={winchurchImg}
						alt="Winchurch Services"
						className="img-fluid case-study-hero-img"
					/>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Problem</h2>
					<p className="case-study-body">
						Winchurch Services helps UK taxpayers reclaim income tax they've
						overpaid, which means identifying — across thousands of clients —
						who's actually owed a refund, or who owes more. HMRC doesn't offer
						a bulk API for this, and checking client records by hand doesn't
						scale past a handful of cases. Any automated collection also has
						to run every day without disrupting HMRC's service or losing the
						access the business depends on.
					</p>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Architecture</h2>
					<p className="case-study-body">
						I worked on an existing codebase, building and maintaining the
						data collection and reconciliation pipeline around three pieces:
					</p>
					<ul className="case-study-list">
						<li>
							<b className="purple">AWS Lambda scheduling</b> — the scraper
							runs as scheduled, horizontally-scaled serverless jobs, working
							through roughly 1,000 taxpayer records every day with no server
							to provision or maintain.
						</li>
						<li>
							<b className="purple">Human-like collection</b> — request
							pacing and session handling engineered to mirror natural
							browsing, so the pipeline keeps running reliably day after day.
						</li>
						<li>
							<b className="purple">Tax reconciliation engine</b> — collected
							records are checked against multiple rule conditions to
							calculate exactly how much tax each client has underpaid or
							overpaid.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<div className="arch-diagram">
						<div className="arch-row">
							<div className="arch-box">
								Scheduler
								<span>AWS Lambda · daily run, ~1,000 taxpayers</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row">
							<div className="arch-box">
								Scraping Bot
								<span>Human-like session &amp; request pacing</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓ HMRC records</div>
						<div className="arch-row">
							<div className="arch-box">
								Database
								<span>Normalized taxpayer &amp; tax records</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row">
							<div className="arch-box">
								Reconciliation Engine
								<span>Multi-condition rules → under/overpaid tax</span>
							</div>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">What I Built</h2>
					<ul className="case-study-list">
						<li>
							The core scraping bot — session handling, request pacing, and
							data extraction across roughly 1,000 taxpayer records a day.
						</li>
						<li>
							The pipeline that stores and normalizes collected records into
							the database.
						</li>
						<li>
							The tax reconciliation logic, comparing each record against
							multiple conditions to calculate under/overpaid tax.
						</li>
						<li>
							Ongoing bug fixes and reliability improvements to keep the bot
							running as HMRC's site changed — I contributed to this codebase
							rather than building the full platform solo.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">Why It Mattered</h2>
					<p className="case-study-body">
						This pipeline is what makes Winchurch's core service work at
						scale. Instead of staff manually checking client tax records one
						by one, the reconciliation engine surfaces exactly which clients
						are owed money — or owe more — automatically, every day, so the
						team can spend their time processing claims instead of hunting for
						them.
					</p>
				</Reveal>

				<Reveal>
					<div className="case-study-cta">
						<Button
							variant="primary"
							href="https://winchurchservices.co.uk/"
							target="_blank"
						>
							Visit Winchurch Services
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

export default WinchurchCaseStudy;
