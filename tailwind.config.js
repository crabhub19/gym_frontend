/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        cooljazz: ['Cooljazz', 'sans-serif'],
        chococooky: ['Chococooky', 'sans-serif'],
      },
      backgroundImage: {
        'home-page-image': "url('/src/assets/image/builtIn/h1_hero.png')",
        'logoOFGym': "url('/src/assets/image/builtIn/gym.png')",
        'lightLogoOFGym': "url('/src/assets/image/builtIn/gym-light.png')",
        'darkLogo': "url('/src/assets/image/builtIn/gym2.jpeg')",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}