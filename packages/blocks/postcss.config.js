const tailwindcss = require('tailwindcss');
const { join } = require('path');

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss(join(__dirname, 'tailwind.config.js')),
    require('postcss-nested'),
    require('autoprefixer'),
  ],
  minimize: true,
  sourceMap: 'inline',
};
