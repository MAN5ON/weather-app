/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1680px',
    },
  },
  plugins: [],
}