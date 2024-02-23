/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,js,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AF9997',
        secondary: '#F1EAE3',
        accent: '#FAB575',
        light: '#F6F4F0',
        black: '#000',
        white: '#FFF',
      },
    },
    fontFamily: {
      'serif': ['"Yeseva One"', 'serif'],
      'script': ['"Dancing Script"', 'cursive'],
    },
  },
  plugins: [],
}