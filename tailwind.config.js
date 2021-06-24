const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./**/*.html", "./**/*.vue"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      colors: {
        gray: colors.coolGray,
      },
      contrast: {
        110: 1.1,
      },
      fontFamily: {
        sans: ["Open Sans", "Segoe UI", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
