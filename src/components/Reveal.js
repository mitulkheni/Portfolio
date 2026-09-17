import React from 'react';
import { motion } from 'framer-motion';

function Reveal({ children, delay = 0, y = 24, className, style }) {
	return (
		<motion.div
			className={className}
			style={style}
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
}

export default Reveal;
