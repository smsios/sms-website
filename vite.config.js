import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  server: {
    allowedHosts: ['.loca.lt'],
  },
  preview: {
    allowedHosts: ['.loca.lt', '.lhr.life'],
  },
})
