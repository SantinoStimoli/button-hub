/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f5efe6',
        darkblue: '#0f172a',
        darkcard: '#1e293b',
        accent: '#ff3b3b',
      },
    },
  },
  plugins: [],
}