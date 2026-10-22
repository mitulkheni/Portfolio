import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
	AiFillGithub,
	AiFillInstagram,
	AiOutlineMail,
	AiOutlinePhone,
} from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import XIcon from './XIcon';
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_LINK } from '../contactInfo';

function Footer() {
	return (
		<Container fluid className="footer">
			<Row>
				<Col xs="12" className="footer-contact">
					<a href={`mailto:${EMAIL}`}>
						<AiOutlineMail aria-hidden="true" /> {EMAIL}
					</a>
					<a href={`tel:${PHONE_TEL}`}>
						<AiOutlinePhone aria-hidden="true" /> {PHONE_DISPLAY}
					</a>
					<a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
						<FaWhatsapp aria-hidden="true" /> WhatsApp
					</a>
				</Col>
			</Row>
			<Row>
				<Col md="6" className="footer-copywright">
					<h3>Designed by Mitul Kheni</h3>
				</Col>
				<Col md="6" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/mitulkheni"
								aria-label="GitHub"
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
								aria-label="X (Twitter)"
								style={{ color: 'white' }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<XIcon />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/mitul-kheni/"
								aria-label="LinkedIn"
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
								aria-label="Instagram"
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
