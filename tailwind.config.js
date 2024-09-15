// Import colors synchronously
const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
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
        Bebas: ["Bebas Neue", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"]
      }
    },
  },
  plugins: [],
});
