module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mood: {
          positive: '#00C189',
          neutral: '#FFD718',
          negative: '#F63C38'
        },
        link: '#00B8A9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
