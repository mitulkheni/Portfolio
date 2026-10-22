import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Particle from '../Particle';
import Reveal from '../Reveal';
import strikezoneImg from '../../Assets/Projects/getstrikezone.ai.png';

function StrikezoneCaseStudy() {
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
						<strong className="purple">Strikezone</strong> — Backend Case Study
					</h1>
					<p className="case-study-subtitle">
						Lead Backend Architect · Provider-agnostic CRM &amp; secure
						data-ingestion platform
					</p>
				</Reveal>

				<Reveal delay={0.1}>
					<img
						src={strikezoneImg}
						alt="Strikezone"
						className="img-fluid case-study-hero-img"
					/>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Problem</h2>
					<p className="case-study-body">
						CRM platforms typically need to talk to a growing list of
						third-party providers — email senders, calendars, inboxes, data
						sources — each with its own API shape, auth flow, and data model.
						Wiring each one up as bespoke, hand-written integration code makes
						the core CRM brittle: every new provider means new code paths, and
						the CRM's domain logic ends up tangled with provider-specific
						quirks instead of staying focused on audience lists, segments, and
						campaigns.
					</p>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">The Architecture</h2>
					<p className="case-study-body">
						I designed the connector layer around three ideas:
					</p>
					<ul className="case-study-list">
						<li>
							<b className="purple">JSON-manifest-driven integrations</b> —
							each provider is described declaratively by a manifest rather
							than one-off integration code, so onboarding a new provider is a
							configuration change, not a new code path.
						</li>
						<li>
							<b className="purple">A common internal schema</b> — every
							manifest maps its provider's data into one normalized schema, so
							the CRM's core features only ever work against a single
							consistent shape, regardless of which provider the data came
							from.
						</li>
						<li>
							<b className="purple">Multi-tenant from the start</b> — the same
							connector infrastructure serves multiple tenants, with data and
							access scoped per tenant throughout the stack.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<div className="arch-diagram">
						<div className="arch-row">
							<div className="arch-box">
								Providers
								<span>Email · Calendar · Gmail · Data sources</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓ JSON manifests</div>
						<div className="arch-row">
							<div className="arch-box">
								Common Schema
								<span>Normalized · multi-tenant</span>
							</div>
						</div>
						<div className="arch-arrow-down">↓</div>
						<div className="arch-row arch-row-split">
							<div className="arch-box">
								CRM Core
								<span>Audience lists · Segments · Campaigns</span>
							</div>
							<div className="arch-box">
								Ingestion API
								<span>Third-party data in → insights out</span>
							</div>
						</div>
					</div>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">What I Built</h2>
					<p className="case-study-body">On top of that foundation:</p>
					<ul className="case-study-list">
						<li>
							Core CRM capabilities — audience lists, dynamic segments, and
							marketing/sales email campaign tooling — all built against the
							common schema.
						</li>
						<li>
							Calendar and Gmail inbox integrations, using the same
							manifest-driven connector as every other provider.
						</li>
						<li>
							A secure ingestion API that lets third-party developers ingest
							their own data into the platform and get insights back, scoped
							to their tenant, on the same common-schema foundation as the
							rest of the CRM.
						</li>
					</ul>
				</Reveal>

				<Reveal>
					<h2 className="case-study-heading">Why It Mattered</h2>
					<p className="case-study-body">
						Because the CRM features are built once against a common schema,
						adding support for a new provider doesn't touch audience lists,
						segments, or campaign logic at all — it's isolated to a new
						manifest. That kept the core product stable to build on even as
						the list of integrated providers grew, and let the same connector
						power both the CRM's own features and the third-party ingestion
						API.
					</p>
				</Reveal>

				<Reveal>
					<div className="case-study-cta">
						<Button
							variant="primary"
							href="https://getstrikezone.ai/"
							target="_blank"
						>
							Visit Strikezone
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

export default StrikezoneCaseStudy;
