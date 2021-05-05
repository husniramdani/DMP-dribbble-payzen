const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '18': "4.5rem",
        '22': "5.5rem",
        '26': "6.5rem",
        '30': "7.5rem",
        '34': "8.5rem",
        '38': "9.5rem",
        '42': "10.5rem",
        '46': "11.5rem",
        '50': "12.5rem",
        '54': "13.5rem",
        '58': "14.5rem",
        '62': "15.5rem",
        '66': "16.5rem",
        '68': "17rem",
        '100': "25rem",
      },
      height: {
        '18': "4.5rem",
        '22': "5.5rem",
        '26': "6.5rem",
        '30': "7.5rem",
        '34': "8.5rem",
        '38': "9.5rem",
        '42': "10.5rem",
        '46': "11.5rem",
        '50': "12.5rem",
        '54': "13.5rem",
        '58': "14.5rem",
        '62': "15.5rem",
        '66': "16.5rem",
        '68': "17rem",
        '100': "25rem",
      },
      colors: {
        gray: colors.coolGray,
        cream: "#FCFBF7",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
