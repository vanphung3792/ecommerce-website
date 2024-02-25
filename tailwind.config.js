/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DAB79F',
        secondary: '#AFB796',
        accent: '#435739',
        light: '#F2E5D5',
      },
    },
    fontFamily: {
      'serif': ['"Yeseva One"', 'serif'],
      'script': ['"Dancing Script"', 'cursive'],
    },
    screens: {
      'sm': '320px',
      'md': '426px',
      'lg': '769px',
      'xl': '1025px',
    },
  },
  plugins: [],
}