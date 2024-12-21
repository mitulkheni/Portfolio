import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CgWebsite } from 'react-icons/cg';

function ProjectCards(props) {
	return (
		<Card className="project-card-view">
			<Card.Img variant="top" src={props.imgPath} alt="card-img" />
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: 'justify' }}>
					{props.description}
				</Card.Text>
				{'\n'}
				{'\n'}

				<div className="mt-auto">
					{props.demoLink && (
						<Button variant="primary" href={props.demoLink} target="_blank">
							<CgWebsite /> &nbsp; {'Visit site'}
						</Button>
					)}
				</div>
			</Card.Body>
		</Card>
	);
}
export default ProjectCards;
