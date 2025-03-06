import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Update the base to your repository name
export default defineConfig({
  plugins: [react()],
  base: '/curamap/', // Change this to match your GitHub repo name
});
