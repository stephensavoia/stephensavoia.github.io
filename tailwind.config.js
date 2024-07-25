/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  theme: {
    fontFamily: {
      sans: ["Verdana", "sans-serif"],
      serif: ["Georgia", "serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi"],
  },
};
