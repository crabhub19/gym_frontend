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
      'white':'#fff',
      'blue':'blue',
      'red':'red',
      'green':'green',
      'yellow':'yellow',
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      RubikWetPaint: ['RubikWetPaint', 'sans-serif'],
      chococooky: ['Chococooky', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      lovelo: ['Lovelo', 'sans-serif'],
      rock: ['RocknRollOne', 'sans-serif'],
    },
    backgroundImage: {
      'home-page-image': "url('/src/assets/image/background/h1_hero.png')",
      'login-page-bg': "url('/src/assets/image/background/login_bg.jpg')",
      'login-page-form': "url('/src/assets/image/background/login_from.jpg')",
    },
    extend: {


    },
  },
  plugins: [],
  darkMode: 'class',
}