module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundDim: 'rgba(0,0,0,0.7)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
