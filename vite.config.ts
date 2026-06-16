import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages, build with: VITE_BASE=/matteo-invitation/ npm run build
// (the included GitHub Actions workflow does this automatically).
// Vercel and local dev use the default '/'.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
});
