const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "Segoe UI", "sans-serif"],
      },
      colors: {
        gray: colors.coolGray,
      },
      contrast: {
        110: 1.1,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
