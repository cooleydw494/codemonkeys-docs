/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
  theme: {
    extend: {
      colors: {

        'primary-100': '#059fff',
        'primary-200': '#4ba9ff',
        'primary-300': '#6cb3ff',
        'primary-400': '#86beff',
        'primary-500': '#9dc8ff',
        'primary-600': '#b2d3ff',
        'primary-700': '#c6ddff',
        'primary-800': '#d9e8ff',


        'surface-100': '#000000',
        'surface-200': '#1e1e1e',
        'surface-300': '#353535',
        'surface-400': '#4e4e4e',
        'surface-500': '#696969',
        'surface-600': '#858585',
        'surface-700': '#a1a1a1',
        'surface-800': '#bdbdbd',

      },
    },
  },
  plugins: [],
}

