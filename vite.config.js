import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  base: "/BywayFrontendUser",

  server: {
    port: 3002,
    host: true,
    strictPort: true,
  }
})