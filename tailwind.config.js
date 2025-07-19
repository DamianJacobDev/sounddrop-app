/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#333333',
        primary: '#E7D2CC',
        secondary: '#B9B7BD',
      }
    },
  },
  plugins: [],
}