/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        raleway: ['"Raleway Variable"', 'sans-serif']
      },
      spacing: {
        '132': '35.25rem',
      }
    },
    colors: {
      oxford: '#0f172a',
      pacific: '#23B5D3',
      celadon: '#a1e8af'
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class'
};
