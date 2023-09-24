/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '10': 'repeat(10, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
  theme: {
    colors: {
      'buttonColor': '#EA4E24',
      'white': 'white',
      'underlineColor': '#EA4E24',
      'indigo-600': 'indigo',
      'green': 'green',
      'lineColor': '#757575',
      'green2': '#4DAE45',
      'purple': '#9881FF',
      'cyan': '#CEEEEA',
      'buttonColor2': '#EBFFEA',
      'navbar': '#C3C3C3',
      'black': 'black',
      'text-light': '#757575',
      'text-dark': '#353535',
      'footer-color': '#F0F8F0'
    },
    screens: {
      'sm': '320px',
      'md': '768px', //iPad Mini
      '2md': '820px', //iPad Air
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  }
})