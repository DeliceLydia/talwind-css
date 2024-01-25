/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./html/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1028px'
    },
    extend: {
      fontFamily: {
        karma: ['Karma', 'sans-serif']
      },
    },
  },
  plugins: [],
}
