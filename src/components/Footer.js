import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Footer() {
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="6" className="footer-copywright">
					<h3>Designed by Mitul Kheni</h3>
				</Col>
				<Col md="6" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/mitulkheni"
								style={{ color: 'white' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://x.com/Mitulkheni5"
								style={{ color: 'white' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiOutlineTwitter />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/mitul-kheni/"
								style={{ color: 'white' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.instagram.com/mitul__kheni/"
								style={{ color: 'white' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillInstagram />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
