import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure the base path is set correctly
  build: {
    outDir: 'dist', // Default output folder, should match your deployment settings
  },
  server: {
    open: true,
  },
});
