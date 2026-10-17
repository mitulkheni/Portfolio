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
import {
	SiRedis,
	SiPostgresql,
	SiTypescript,
	SiPython,
	SiNestjs,
	SiExpress,
	SiSupabase,
	SiFirebase,
	SiPrisma,
	SiAmazonaws,
	SiMicrosoftazure,
	SiApachekafka,
	SiRabbitmq,
	SiJsonwebtokens,
} from 'react-icons/si';

function Techstack() {
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiTypescript />
				<span>TypeScript</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
				<span>JavaScript</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPython />
				<span>Python</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs size="90px" />
				<span>Node.js</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNestjs />
				<span>NestJS</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<span>Express.js</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
				<span>React</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
				<span>PostgreSQL</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
				<span>MongoDB</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedis />
				<span>Redis</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSupabase />
				<span>Supabase</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
				<span>Firebase</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPrisma />
				<span>Prisma</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
				<span>AWS</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMicrosoftazure />
				<span>Azure</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiDocker />
				<span>Docker</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiApachekafka />
				<span>Kafka</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRabbitmq />
				<span>RabbitMQ</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiJsonwebtokens />
				<span>JWT</span>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
				<span>Git</span>
			</Col>
		</Row>
	);
}

export default Techstack;
