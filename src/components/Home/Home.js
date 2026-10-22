import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMail, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import homeLogo from '../../Assets/home-main.svg';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import Reveal from '../Reveal';

function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={homeLogo}
								alt=""
								className="img-fluid"
								style={{ maxHeight: '450px' }}
							/>
						</Col>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hey There!
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'M
								<strong className="main-name"> MITUL KHENI</strong>
							</h1>

							<Reveal delay={0.2} y={10}>
								<div className="open-to-work-badge">
									<span className="open-to-work-dot" />
									Available for freelance projects
								</div>
							</Reveal>

							<div style={{ padding: 50, textAlign: 'left' }}>
								<Type />
							</div>

							<Reveal delay={0.35} y={10}>
								<div className="home-cta">
									<Button variant="primary" as={Link} to="/contact">
										<AiOutlineMail aria-hidden="true" /> &nbsp; Hire me
									</Button>
									<Button variant="outline-light" as={Link} to="/project">
										<AiOutlineFundProjectionScreen aria-hidden="true" /> &nbsp;
										View my work
									</Button>
								</div>
							</Reveal>
						</Col>
					</Row>
				</Container>
			</Container>
			<Home2 />
		</section>
	);
}

export default Home;
