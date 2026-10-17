import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	SiVisualstudiocode,
	SiPostman,
	SiSwagger,
	SiUbuntu,
	SiGithubactions,
	SiJest,
	SiVercel,
} from 'react-icons/si';

function Toolstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiUbuntu />
				<span>Ubuntu</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
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
