import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/about',
  '/works',
  '/contact',
  '/gallery',
  '/career',
  '/blogs',
  '/teams',
  '/services/web-design-development',
  '/services/digital-marketing',
  '/services/bpo-services',
  '/services/graphic-design',
  '/services/photo-video-production',
  '/services/app-development',
  '/services/job-consultancy',
  '/services/event-management',
  '/services/live-streaming',
  '/services/political-rallies-events',
];

export default defineConfig({
  plugins: [
    react(),

    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),

    sitemap({
      hostname: 'https://technosagainfotech.in',
      dynamicRoutes: routes,
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },

  server: {
    port: 3000,
  },
})