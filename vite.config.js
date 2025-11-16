import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
extend: {
colors: {
primary: '#ff7b00',
charcoal: '#111215'
},
fontFamily: {
inter: ['Inter', 'sans-serif'],
poppins: ['Poppins', 'sans-serif']
}
}
},
  plugins: [react(),tailwindcss(),],
})
