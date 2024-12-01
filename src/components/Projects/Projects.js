import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import leaf from '../../Assets/Projects/leaf.png';
import contractorForeman from '../../Assets/Projects/CF.png';
import virtualBudz from '../../Assets/Projects/VirtualBudz.png';
import Helloo from '../../Assets/Projects/Helloo.png';
import suicide from '../../Assets/Projects/suicide.png';

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
						<ProjectCard
							imgPath={contractorForeman}
							title="Contractor Foreman"
							description="Developed and optimized the Contractor Foreman website using NestJS, enhancing construction project management capabilities with seamless scheduling, financial tracking, real-time updates and much more."
							demoLink="https://contractorforeman.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={virtualBudz}
							isBlog={false}
							title="Virtual Budz Campaign Management"
							description="Virtual Budz is a campaign management app for cannabis, marijuana, and medical industry."
							demoLink="https://virtualbudz.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Helloo}
							isBlog={false}
							title="Helloo One"
							description="Helloo one is an app to generate and share cards digitally between clients and customers"
							ghLink="https://github.com/soumyajit4419/Editor.io"
							demoLink="https://app.helloo.one/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="Netabe"
							description="Built document sharing and chat functionalities for Netabe using NestJS with Docker, including API development for both admin and user management."
							ghLink="https://github.com/soumyajit4419/Plant_AI"
							demoLink="https://plant49-ai.herokuapp.com/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={suicide}
							isBlog={false}
							title="BIMX"
							description="Developed BIMX, a construction management platform with 3D image handling and integrated AutoCAD viewer, helping contractors visualize and manage project designs efficiently."
							ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
