colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    // enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,ts}']
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: colors.orange,
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    container: {
      padding: '2rem'
    },
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
