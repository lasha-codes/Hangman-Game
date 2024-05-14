/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gradPurple: '#8A2BE2',
        gradPink: '#FF69B4',
      },
    },
  },
  plugins: [],
}
