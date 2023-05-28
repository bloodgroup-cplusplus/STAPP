
/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[],
  content: ["./screens/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

