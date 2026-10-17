import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Reveal from '../Reveal';
import contractorForeman from '../../Assets/Projects/CF.png';
import virtualBudz from '../../Assets/Projects/VirtualBudz.png';
import Helloo from '../../Assets/Projects/Helloo.png';
import codeEditor from '../../Assets/Projects/codeEditor.png';
// import strikezone from '../../Assets/Projects/getstrikezone.ai.png'; // hidden for now
import appinvento from '../../Assets/Projects/AppInvento.jpg';
import movework from '../../Assets/Projects/Movework.png';
import winchurch from '../../Assets/Projects/Winchurch.jpg';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: 'white' }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					{/* Strikezone is hidden for now. To restore it, uncomment this card, the
					    import above, and the route in App.js.
					<Col md={4} className="project-card">
						<Reveal delay={0} className="h-100">
							<ProjectCard
								imgPath={strikezone}
								title="Strikezone"
								description="Served as lead backend architect for Strikezone, designing a provider-agnostic CRM connector and core CRM capabilities — audience lists, dynamic segments, email campaigns, marketing and sales email tools, and calendar and Gmail inbox integrations. Also built a secure ingestion API that lets third-party developers ingest data and surface insights from it."
								caseStudyLink="/project/strikezone"
								demoLink="https://getstrikezone.ai/"
							/>
						</Reveal>
					</Col>
					*/}

					<Col md={4} className="project-card">
						<Reveal delay={0} className="h-100">
							<ProjectCard
								imgPath={appinvento}
								title="AppInvento"
								description="Developed the backend for AppInvento, an AI-powered platform (currently under development) that builds and deploys full-stack web applications from natural-language prompts. Built REST APIs, queue management, payment gateway integration, and project hosting, among other core backend services."
								caseStudyLink="/project/appinvento"
								demoLink="https://app.appinvento.io/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.08} className="h-100">
							<ProjectCard
								imgPath={movework}
								title="Movework"
								description="Built the complete backend for Movework, an Israel-based job marketplace connecting contractors and job posters for residential and commercial work like plumbing and carpentry, across Android, iOS, and web clients. Implemented Google SSO, PayPlus payment processing, InforuMobile SMS notifications, and Firebase push notifications, backed by MongoDB. The Android app has 1,000+ downloads on Google Play."
								caseStudyLink="/project/movework"
								demoLink="https://www.ha-aver.com/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.16} className="h-100">
							<ProjectCard
								imgPath={winchurch}
								title="Winchurch Services"
								description="Contributed to Winchurch Services, a UK tax-rebate platform that reclaims overpaid income tax for clients. Built an AWS Lambda and PostgreSQL workflow that collects approximately 1,000 taxpayer records daily and calculates overpaid or underpaid tax across multiple conditions."
								caseStudyLink="/project/winchurch"
								demoLink="https://winchurchservices.co.uk/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0} className="h-100">
							<ProjectCard
								imgPath={contractorForeman}
								title="Contractor Foreman"
								description="Developed and optimized NestJS backend capabilities for Contractor Foreman's construction project management platform, including scheduling, financial tracking, and real-time updates, serving 60,000+ live users."
								demoLink="https://contractorforeman.com/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.08} className="h-100">
							<ProjectCard
								imgPath={virtualBudz}
								title="Virtual Budz Campaign Management"
								description="Developed campaign scheduling, audience targeting, and product and inventory analytics for Virtual Budz, a campaign management platform for cannabis retail with POS integrations."
								demoLink="https://virtualbudz.com/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.16} className="h-100">
							<ProjectCard
								imgPath={Helloo}
								title="Helloo One"
								description="Built backend features for Helloo One, an app that lets businesses create and share digital cards with their customers."
								demoLink="https://app.helloo.one/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0} className="h-100">
							<ProjectCard
								imgPath={codeEditor}
								title="Netabe"
								description="Built document sharing and chat functionality for Netabe with NestJS and Docker, including APIs for admin and user management."
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.08} className="h-100">
							<ProjectCard
								imgPath={codeEditor}
								title="BIMX"
								description="Developed backend capabilities for BIMX, a construction management platform, including 3D image handling and support for an integrated AutoCAD viewer."
							/>
						</Reveal>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
