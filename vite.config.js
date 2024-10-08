import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages';

// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), qrcode(),ghPages()],
  base: '/portfolio-master/',
})
