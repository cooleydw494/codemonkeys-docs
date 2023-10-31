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

        'surface-100': '#16141c',
        'surface-200': '#2b2931',
        'surface-300': '#39373d',
        'surface-400': '#5a585f',
        'surface-500': '#737277',
        'surface-600': '#8d8c91',
        'surface-700': '#a7a6aa',
        'surface-800': '#c1c0c3',

        'inline-code': '#f08d49',

      },
    },
  },
  plugins: [],
}

