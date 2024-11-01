/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark': '#1E201E',
      'theme':'#FF0000',
      'main': '#ff1313',
      'main-dark': '#c20505',
      'gray-dark': '#343a40',
      'gray': '#6c757d',
      'gray-light': '#d3dce6',
      'black':'#000',
      'white':'#fff'
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      RubikWetPaint: ['RubikWetPaint', 'sans-serif'],
      chococooky: ['Chococooky', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      lovelo: ['Lovelo', 'sans-serif'],
    },
    backgroundImage: {
      'home-page-image': "url('/src/assets/image/builtIn/h1_hero.png')",
    },
    extend: {


    },
  },
  plugins: [],
  darkMode: 'class',
}