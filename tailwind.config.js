/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {

        'primary': '#f3eefc',
        'secondary': '#c9faeb',
        'tertiary': '#70a6d2',
        'quaternary': '#131111',
        'quinary': '#221c2a',

        'primary-100': '#37ff05',
        'primary-200': '#62ff40',
        'primary-300': '#7fff5f',
        'primary-400': '#97ff79',
        'primary-500': '#abff91',
        'primary-600': '#beffa7',

        'surface-100': '#221c2a',
        'surface-200': '#37313e',
        'surface-300': '#4d4754',
        'surface-400': '#645f6a',
        'surface-500': '#7c7781',
        'surface-600': '#959199',
        'surface-700': '#aeabb1',
        'surface-800': '#c8c6c8',

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

