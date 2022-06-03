const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: [/^text/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          150: "#EBECEF",
          450: "#727C8D"
        },
      },
      fontFamily: {
        'sans': ['"Inter UI"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'monaco': ['Monaco'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.coolGray,
      green: colors.emerald,
      lime: colors.lime,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      white: colors.white,
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage: ['active'],
      boxShadow: ['active'],
      gradientColorStops: ['active'],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  separator: "_",
};
