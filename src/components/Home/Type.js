import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					'Backend Architect',
					'Node.js Developer',
					'API & CRM Systems Builder',
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
