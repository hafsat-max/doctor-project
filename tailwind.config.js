/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        lato: "Lato",
        inter: "Inter",
      },
    },
  },
  plugins: [],
}

