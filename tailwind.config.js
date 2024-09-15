// Import colors synchronously
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeOne: colors.yellow[900],
        themeTwo: colors.yellow[500],
        themeThree: colors.yellow[600],
        themeFour: "white",
        themeFive: "black"
      },
      fontFamily: {
        Bebas: ["Bebas Neue","sans-sarif"],
        Roboto: ["Roboto","sans-sarif"],
        Oswald: ["Oswald","sans-sarif"]
      }
    },
  },
  plugins: [],
};
