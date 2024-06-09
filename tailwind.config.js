
const screens = require('./src/theme/screens');
const colors = require('./src/theme/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
    
      colors,
      screens, 
    },
  },
  plugins: [],
};
