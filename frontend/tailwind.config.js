/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecuador-amarillo': '#FFD100', // Un toque local opcional
        'ecuador-azul': '#0033A0',
        'ecuador-rojo': '#C8102E',
      }
    },
  },
  plugins: [],
}