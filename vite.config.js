// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // base: '/mern-ecommerce-website-frontend/',
 
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      // If your backend API is running on port 5000
      '/api': 'http://localhost:5000', // Adjust the backend URL if different
    },
  },
});
