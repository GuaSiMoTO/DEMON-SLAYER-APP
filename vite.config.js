import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // Usamos jsdom para simular el entorno del navegador (DOM, localStorage, etc.)
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      // Excluimos archivos que no tienen lógica testeable
      exclude: ['src/main.jsx', 'src/assets/**'],
    },
  },

})


