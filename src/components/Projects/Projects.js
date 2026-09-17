import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import Reveal from '../Reveal';
import contractorForeman from '../../Assets/Projects/CF.png';
import virtualBudz from '../../Assets/Projects/VirtualBudz.png';
import Helloo from '../../Assets/Projects/Helloo.png';
import codeEditor from '../../Assets/Projects/codeEditor.png';
import strikezone from '../../Assets/Projects/getstrikezone.ai.png';

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
					<Col md={4} className="project-card">
						<Reveal delay={0}>
							<ProjectCard
								imgPath={strikezone}
								title="Strikezone"
								description="Served as lead backend architect for Strikezone, designing a provider-agnostic CRM connector and core CRM capabilities — audience lists, dynamic segments, email campaigns, marketing and sales email tools, and calendar and Gmail inbox integrations. Also built a secure ingestion API that lets third-party developers ingest data and surface insights from it."
								caseStudyLink="/project/strikezone"
								demoLink="https://getstrikezone.ai/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.08}>
							<ProjectCard
								imgPath={contractorForeman}
								title="Contractor Foreman"
								description="Developed and optimized the Contractor Foreman website using NestJS, enhancing construction project management capabilities with seamless scheduling, financial tracking, real-time updates and much more."
								demoLink="https://contractorforeman.com/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.16}>
							<ProjectCard
								imgPath={virtualBudz}
								title="Virtual Budz Campaign Management"
								description="Virtual Budz is a campaign management app for cannabis, marijuana, and medical industry."
								demoLink="https://virtualbudz.com/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0}>
							<ProjectCard
								imgPath={Helloo}
								title="Helloo One"
								description="Helloo one is an app to generate and share business cards digitally between clients and customers"
								demoLink="https://app.helloo.one/"
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.08}>
							<ProjectCard
								imgPath={codeEditor}
								title="Netabe"
								description="Built document sharing and chat functionalities for Netabe using NestJS with Docker, including API development for both admin and user management."
							/>
						</Reveal>
					</Col>

					<Col md={4} className="project-card">
						<Reveal delay={0.16}>
							<ProjectCard
								imgPath={codeEditor}
								title="BIMX"
								description="Developed BIMX, a construction management platform with 3D image handling and integrated AutoCAD viewer, helping contractors visualize and manage project designs efficiently."
							/>
						</Reveal>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
