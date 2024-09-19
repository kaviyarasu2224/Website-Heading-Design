
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Website-Header-Design/',  // Adjust this if the repository name changes
});
