/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss'],
    theme: {
        extend: {

            // https://colorffy.com/dark-theme-generator

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
                'surface-200': '#28252d',
                'surface-300': '#353338',
                'surface-400': '#5a585f',
                'surface-500': '#737277',
                'surface-600': '#8d8c91',
                'surface-700': '#a7a6aa',
                'surface-800': '#c8c7c9',
                'surface-900': '#e9e9e9',

                'inline-code': '#f08d49',

            },
            fontSize: {
                '4xs': ['.375rem', { lineHeight: '.5rem' }],
                '3xs': ['.5rem', { lineHeight: '.75rem' }],
                '2xs': ['.625rem', { lineHeight: '.875rem' }],
                xs: ['0.75rem', { lineHeight: '1rem' }],
                'xs.5': ['.8125rem', { lineHeight: '1.125rem' }],
                sm: ['0.875rem', { lineHeight: '1.25rem' }],
                'sm.5': ['.9375rem', { lineHeight: '1.375rem' }],
                base: ['1rem', { lineHeight: '1.5rem' }],
                lg: ['1.125rem', { lineHeight: '1.75rem' }],
                xl: ['1.25rem', { lineHeight: '1.75rem' }],
                '2xl': ['1.5rem', { lineHeight: '2rem' }],
                '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '5xl': ['3rem', { lineHeight: '1' }],
                '6xl': ['3.75rem', { lineHeight: '1' }],
                '7xl': ['4.5rem', { lineHeight: '1' }],
                '8xl': ['6rem', { lineHeight: '1' }],
                '9xl': ['8rem', { lineHeight: '1' }],
            },
            screens: {
                '3xl': '1720px',
            },
            backgroundOpacity: {
                '7.5': '0.075',
            }
        },
    },
    plugins: [],
}

