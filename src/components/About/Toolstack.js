import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { SiVisualstudiocode, SiPostman, SiUbuntu } from 'react-icons/si';

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
		</Row>
	);
}

export default Toolstack;
