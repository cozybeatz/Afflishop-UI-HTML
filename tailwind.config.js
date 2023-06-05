/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./account/*.{html,js}", "./auth/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        grotesque: "'Darker Grotesque', sans-serif",
        serifDisplay: "'DM Serif Display', serif",
      },
    },
  },
  plugins: [],
};
