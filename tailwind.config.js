/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        ping: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      colors: {
        gray: {
          850: '#151c2e',
        },
      },
      contrast: {
        110: 1.1,
      },
      inset: {
        18: '4.5rem',
      },
    },
  },
};
