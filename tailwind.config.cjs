/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    screens: {
      'tablet': {'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'tablet-xl': {'max': '835px'},

      'laptop': {'max': '1024px'},
      // => @media (min-width: 1024px) { ... }

      'desktop': {'max': '1280px'},
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'background': '#0f0f0f',
        'primary': '#DBEDF3',
        'secondary': '#672977',
      },
    },
  },
  plugins: [],
}
