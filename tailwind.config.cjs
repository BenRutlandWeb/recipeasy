const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./**/*.vue"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        ping: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      colors: {
        yellow: colors.yellow,
        gray: {
          ...colors.gray,
          850: "#151c2e",
        },
      },
      contrast: {
        110: 1.1,
      },
      fontFamily: {
        sans: ["Open Sans", "Segoe UI", "sans-serif"],
        "toastie-heading": ["Luckiest Guy", "cursive"],
        "toastie-body": ["Dosis", "sans-serif"],
      },
      inset: {
        18: "4.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
