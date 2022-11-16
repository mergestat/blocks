const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./tailwind-preset.js')],
  content: [
    join(
      __dirname,
      '{src,styles}/**/*!(*.stories|*.spec).{ts,tsx,html,css,woff,woff2}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  mode: 'jit',
};
