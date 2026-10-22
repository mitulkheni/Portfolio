import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiPostman,
	SiSwagger,
	SiUbuntu,
	SiGithubactions,
	SiJest,
	SiVercel,
} from 'react-icons/si';
// react-icons 5 removed the Visual Studio Code logo from the Simple Icons set.
import { VscVscode } from 'react-icons/vsc';

function Toolstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiUbuntu />
				<span>Ubuntu</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<VscVscode />
				<span>Visual Studio</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
				<span>Postman</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSwagger />
				<span>Swagger</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithubactions />
				<span>GitHub Actions</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJest />
				<span>Jest</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVercel />
				<span>Vercel</span>
			</Col>
		</Row>
	);
}

export default Toolstack;
