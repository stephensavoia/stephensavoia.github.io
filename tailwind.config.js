/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk}"],
  safelist: [
    'lg:flex-row-reverse',
    'flex-row-reverse',
    'lg:max-w-lg',
  ],
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
