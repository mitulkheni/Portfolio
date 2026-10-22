import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, useLocation } from 'react-router-dom';
import {
	AiOutlineHome,
	AiOutlineFundProjectionScreen,
	AiOutlineUser,
	AiOutlineMail,
} from 'react-icons/ai';
import logo from '../Assets/logo.png';

import { CgFileDocument } from 'react-icons/cg';

const NAV_LINKS = [
	{ to: '/', label: 'Home', Icon: AiOutlineHome },
	{ to: '/about', label: 'About', Icon: AiOutlineUser },
	{ to: '/project', label: 'Projects', Icon: AiOutlineFundProjectionScreen },
	{ to: '/resume', label: 'Resume', Icon: CgFileDocument },
	{ to: '/contact', label: 'Contact', Icon: AiOutlineMail },
];

// Projects stays highlighted on its case-study pages (/project/<slug>).
function isActive(pathname, to) {
	return to === '/' ? pathname === '/' : pathname.startsWith(to);
}

function NavBar() {
	const [expand, updateExpanded] = useState(false);
	const [navColour, updateNavbar] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		function scrollHandler() {
			if (window.scrollY >= 20) {
				updateNavbar(true);
			} else {
				updateNavbar(false);
			}
		}

		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<Navbar
			expanded={expand}
			fixed="top"
			expand="md"
			className={navColour ? 'sticky' : 'navbar'}
		>
			<Container>
				<Navbar.Toggle
					aria-controls="responsive-navbar-nav"
					onClick={() => {
						updateExpanded(expand ? false : 'expanded');
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav>
						{NAV_LINKS.map(({ to, label, Icon }) => {
							const active = isActive(pathname, to);
							return (
								<Nav.Item key={to}>
									<Nav.Link
										as={Link}
										to={to}
										active={active}
										aria-current={active ? 'page' : undefined}
										onClick={() => updateExpanded(false)}
									>
										<Icon style={{ marginBottom: '2px' }} aria-hidden="true" />{' '}
										{label}
									</Nav.Link>
								</Nav.Item>
							);
						})}
					</Nav>
				</Navbar.Collapse>
				<Navbar.Brand as={Link} to="/" className="d-flex">
					<img
						src={logo}
						className="img-fluid logo"
						alt="Mitul Kheni, home"
					/>
				</Navbar.Brand>
			</Container>
		</Navbar>
	);
}

export default NavBar;
