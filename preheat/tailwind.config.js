module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      create: "0px 24px 32px 0px #00000003, 0px 16px 24px 0px #0000000A, 0px 4px 8px 0px #0000000A, 0px 0px 1px 0px #00000003",
      createShallow: 'rgb(0 0 0 / 5%) 0px 0px 2px, rgb(0 0 0 / 5%) 0px 2px 10px',
    },
    extend: {
      colors: {
        backgroundLight: '#f7f5f8',
        backgroundLightAlternate: '#F2F6FB',
        backgroundDim: 'rgba(0,0,0,0.7)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
