/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {
        'primary': '#ded4e8',
        'secondary': '#7ad3b9',
        'tertiary': '#e0ecb4',
        'quaternary': '#4b3e3e',
        'quinary': 'rgba(46,20,89,0.35)',
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

