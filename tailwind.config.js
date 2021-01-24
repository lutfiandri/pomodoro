const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: colors.indigo,
        green: colors.green,
        teal: colors.teal,
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        // md: '4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
