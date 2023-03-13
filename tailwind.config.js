/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./scripts.js",
  ],
  theme: {
    extend: {
      screens: {
        '1440': '1440px',
      },
    },
  },
  plugins: [],
}
