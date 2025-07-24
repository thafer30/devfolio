/** @type {import('tailwindcss').Config} */
module.exports = {
  // future: {
  //   removeDeprecatedGapUtilities: true,
  //   purgeLayersByDefault: true,
  // },
  // content: [
  //   './src/**/*.js',
  //   './src/**/*.jsx',
  //   './src/**/*.ts',
  //   './src/**/*.tsx',
  // ],
  // theme: {
  //   extend: {
  //     screens: {
  //       xs: '480px',
  //     },
  //   },
  // },
  // variants: {},
  // plugins: [],
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
