module.exports = {
  content: {
    files: [
      './components/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './layouts/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './pages/**/*.{vue,js,jsx,mjs,ts,tsx}',
      './plugins/**/*.{js,ts,mjs}',
      './composables/**/*.{js,ts,mjs}',
      './utils/**/*.{js,ts,mjs}',
      './{A,a}pp.{vue,js,jsx,mjs,ts,tsx}',
      './{E,e}rror.{vue,js,jsx,mjs,ts,tsx}',
      './app.config.{js,ts,mjs}',
      './app/spa-loading-template.html',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      'alabaster': '#f9f9f9', // dark bg in light mode
      'black': '#000000',
      'ebony-clay': '#2B3844', // light bg in dark mode
      'mine-shaft': '#202C36', // dark bg in dark mode
      'white': '#ffffff', // light bg in light mode, text color in dark mode
      'wood-smoke': '#111517', // text color in light mode
    },
    fontFamily: {
      custom: ['Nunito Sans', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.375rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
    },
    fontWeight: {
      '300': 300,
      '400': 400,
      '600': 600,
      '800': 800,
    }
  },
  plugins: [],
}
