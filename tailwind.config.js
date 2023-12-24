/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'newYork': 'url("/src/assets/newYork.png")',
        'norway': 'url("/src/assets/norway.png")',
        'yosemite': 'url("/src/assets/yosemite.png")',
        'seattle': 'url("/src/assets/seattle.png")',
        'sanFrancisco': 'url("/src/assets/sanFrancisco.png")',
        'sanFranciscoDesktop': 'url("/src/assets/sanFranciscoDesktop.png")',
        'chicago': 'url("/src/assets/chicago.png")',
        'bali': 'url("/src/assets/bali.png")',
        'miami': 'url("/src/assets/miami.png")',
        'losAngeles': 'url("/src/assets/losAngeles.png")',
        
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
       }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
    },
    fontFamily: {
			Montserrat: ['"Montserrat"', "sans-serif"],
		},
  },
  plugins: [],
}

}