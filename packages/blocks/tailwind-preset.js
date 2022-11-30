const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          150: '#EBECEF',
          250: '#DDDFE4',
          350: 'B9C0CB',
          450: '#727C8D'
        },
      },
      fontFamily: {
        'sans': ['"Inter UI"', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
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
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      backgroundImage: ['active'],
      boxShadow: ['active'],
      gradientColorStops: ['active']
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
  separator: '_',
}
