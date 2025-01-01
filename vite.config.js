import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})