/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        orange: {
          500: '#f97316',
        },
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ['hover'],
      textUnderlineOffset: ['hover'],
    },
  },
  plugins: [],
}