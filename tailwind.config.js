/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ungu: "#120227",
        ungu2: "#1F0443",
        ungu3: "#321655",
        pink: "#C93D8D",
        white: "#ffffff",
        gray: "#DADADA4D",
        black: "#000000",
        red: "#FF0000",
        green: "#00FF7F",
      },

      backgroundImage: {
        apasto: "url('/src/img/background.png')"
      },

      fontFamily: {
        Poppins: ["Poppins", "serif"],
      }
    },
  },
  plugins: [],
}