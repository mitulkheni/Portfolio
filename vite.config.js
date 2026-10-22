import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
	// GitHub Pages serves the site from /Portfolio/. The dev server serves from /.
	base: mode === 'production' ? '/Portfolio/' : '/',
	plugins: [react()],
	server: { port: 3000 },
	// Keep the folder name that `npm run deploy` (gh-pages -d build) publishes.
	build: { outDir: 'build' },
}));
