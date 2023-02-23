/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '370px',
      ...defaultTheme.screens
    },
    container: {
      screens: {
        sm: '90%',
        ...defaultTheme.screens
      }
    }
  },
  plugins: [require('daisyui')]
};
