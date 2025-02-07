import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Autorise toutes les connexions réseau
    port: 5173, // Port par défaut de Vite
    strictPort: true, // Échoue si le port est déjà utilisé
  },
})
