import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.svg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import XIcon from '../XIcon';
import Reveal from '../Reveal';

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={4} className="myAvatar">
						<Reveal y={16}>
							<Tilt>
								<img src={myImg} className="img-fluid" alt="" />
							</Tilt>
						</Reveal>
					</Col>
					<Col md={8} className="home-about-description">
						<Reveal delay={0.1}>
							<h1 style={{ fontSize: '2.6em' }}>
								LET ME <span className="purple"> INTRODUCE </span> MYSELF
							</h1>
							<p className="home-about-body">
								I'm a backend developer with{' '}
								<i>
									<b className="purple">4+ years</b>
								</i>{' '}
								of experience building services for{' '}
								<i>
									<b className="purple">
										AI app-building, construction, marketplace, and tax
										platforms
									</b>
								</i>{' '}
								— leading backend architecture and delivering REST APIs,
								microservices, data integrations, and production features.
								<br />
								<br />
								I work primarily in{' '}
								<i>
									<b className="purple">JavaScript and TypeScript</b>
								</i>
								, and I'm most at home architecting systems with
								<i>
									<b className="purple"> Node.js and Nest.js</b>
								</i>
								.
								<br />
								<br />I care about getting the underlying design right —
								clean abstractions, sane data models, and APIs that are
								pleasant for other developers to integrate with, backed by
								<i>
									<b className="purple">
										{' '}
										MongoDB, PostgreSQL, Redis, Docker and AWS
									</b>
								</i>
								.
							</p>
						</Reveal>
					</Col>
				</Row>
				<Row>
					<Col md={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/mitulkheni"
									aria-label="GitHub"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://x.com/Mitulkheni5"
									aria-label="X (Twitter)"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<XIcon />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/mitul-kheni/"
									aria-label="LinkedIn"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/mitul__kheni/"
									aria-label="Instagram"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
