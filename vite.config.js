import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://yousseforabi.github.io/portfolio/',   // Ensure correct base path for GitHub Pages
  build: {
    outDir: 'dist',  
})
