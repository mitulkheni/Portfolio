import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineEnvironment,
	AiOutlineSend,
} from 'react-icons/ai';
import { FaWhatsapp } from 'react-icons/fa';
import Particle from '../Particle';
import Reveal from '../Reveal';
import {
	EMAIL,
	PHONE_DISPLAY,
	PHONE_TEL,
	WHATSAPP_LINK,
	LOCATION,
	TIMEZONE,
	FORMSPREE_ENDPOINT,
} from '../../contactInfo';

function Contact() {
	// idle | sending | success | error
	const [status, setStatus] = useState('idle');

	async function handleSubmit(e) {
		e.preventDefault();
		const form = e.currentTarget;

		// No Formspree endpoint configured yet: hand the message to the visitor's email app.
		if (!FORMSPREE_ENDPOINT) {
			const data = new FormData(form);
			const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
			window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
				'Project enquiry from your portfolio',
			)}&body=${encodeURIComponent(body)}`;
			return;
		}

		setStatus('sending');
		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: 'POST',
				headers: { Accept: 'application/json' },
				body: new FormData(form),
			});
			if (res.ok) {
				form.reset();
				setStatus('success');
			} else {
				setStatus('error');
			}
		} catch (err) {
			setStatus('error');
		}
	}

	return (
		<Container fluid className="contact-section">
			<Particle />
			<Container>
				<Reveal>
					<h1 className="project-heading">
						Let's <strong className="purple">Work Together</strong>
					</h1>
					<p className="contact-intro">
						I'm taking on freelance backend projects: REST APIs, Node.js and
						NestJS services, third-party integrations, and architecture. Tell me
						what you're building and I'll get back to you.
					</p>
				</Reveal>

				<Row className="contact-row">
					<Col lg={5} className="contact-details">
						<Reveal delay={0.05} className="contact-cards">
							<a href={`mailto:${EMAIL}`} className="contact-card">
								<AiOutlineMail className="contact-card-icon" aria-hidden="true" />
								<span className="contact-card-text">
									<span className="contact-card-label">Email</span>
									<span className="contact-card-value">{EMAIL}</span>
								</span>
							</a>
							<a href={`tel:${PHONE_TEL}`} className="contact-card">
								<AiOutlinePhone className="contact-card-icon" aria-hidden="true" />
								<span className="contact-card-text">
									<span className="contact-card-label">Phone</span>
									<span className="contact-card-value">{PHONE_DISPLAY}</span>
								</span>
							</a>
							<a
								href={WHATSAPP_LINK}
								target="_blank"
								rel="noopener noreferrer"
								className="contact-card"
							>
								<FaWhatsapp className="contact-card-icon" aria-hidden="true" />
								<span className="contact-card-text">
									<span className="contact-card-label">WhatsApp</span>
									<span className="contact-card-value">Chat with me</span>
								</span>
							</a>
							<div className="contact-card contact-card-static">
								<AiOutlineEnvironment
									className="contact-card-icon"
									aria-hidden="true"
								/>
								<span className="contact-card-text">
									<span className="contact-card-label">Location</span>
									<span className="contact-card-value">{LOCATION}</span>
									<span className="contact-card-note">Working in {TIMEZONE}</span>
								</span>
							</div>
						</Reveal>
					</Col>

					<Col lg={7}>
						<Reveal delay={0.12}>
							<Form
								className="contact-form"
								onSubmit={handleSubmit}
								aria-label="Contact form"
							>
								<Form.Group className="mb-3" controlId="contact-name">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										autoComplete="name"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="contact-email">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										name="email"
										autoComplete="email"
										required
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="contact-message">
									<Form.Label>What are you building?</Form.Label>
									<Form.Control
										as="textarea"
										rows={5}
										name="message"
										required
									/>
								</Form.Group>

								{/* Formspree honeypot: real visitors never see or fill this. */}
								<div className="contact-honeypot" aria-hidden="true">
									<label htmlFor="contact-gotcha">Leave this field empty</label>
									<input
										type="text"
										id="contact-gotcha"
										name="_gotcha"
										tabIndex={-1}
										autoComplete="off"
									/>
								</div>
								<input
									type="hidden"
									name="_subject"
									value="New enquiry from your portfolio"
								/>

								<Button
									variant="primary"
									type="submit"
									disabled={status === 'sending'}
								>
									<AiOutlineSend aria-hidden="true" /> &nbsp;
									{status === 'sending' ? 'Sending…' : 'Send message'}
								</Button>

								<div className="contact-status" role="status" aria-live="polite">
									{status === 'success' && (
										<p className="contact-status-success">
											Thanks, your message is on its way. I'll reply to the
											email you provided.
										</p>
									)}
									{status === 'error' && (
										<p className="contact-status-error">
											Something went wrong sending that. Please email me directly
											at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
										</p>
									)}
								</div>
							</Form>
						</Reveal>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Contact;
