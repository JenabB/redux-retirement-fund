const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: colors.blue,
      green: colors.green,
      teal: {
        normal: "#32CCCB",
        dark: "#2B8B96",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
