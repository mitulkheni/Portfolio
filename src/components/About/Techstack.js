import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiGit,
	DiDocker,
} from 'react-icons/di';
import { SiRedis, SiPostgresql } from 'react-icons/si';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
				<span>JavaScript</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs size="90px" />
				<span>Node.js</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
				<span>MongoDB</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
				<span>Git</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedis />
				<span>Redis</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
				<span>PostgreSQL</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDocker />
				<span>Docker</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<span>React</span>
			</Col>
		</Row>
	);
}

export default Techstack;
