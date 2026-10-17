import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Senior Backend Developer',
					'Node.js & NestJS Developer',
					'Backend Architect',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
