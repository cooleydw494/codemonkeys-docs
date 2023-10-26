/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        'primary': '#f3eefc',
        'secondary': '#c9faeb',
        'tertiary': '#c4fc8f',
        'quaternary': '#4b3e3e',
        'quinary': '#1f1928',
      },
      fontFamily: {
        'heading': ['Roboto', 'sans-serif'],
        'body': ['Roboto Slab', 'sans-serif'],
      },
      fontSize: {
        'heading': ['2rem', { lineHeight: '2.5rem' }],
        'body': ['1rem', { lineHeight: '1.5rem' }],
      }
    },
  },
  plugins: [],
}

