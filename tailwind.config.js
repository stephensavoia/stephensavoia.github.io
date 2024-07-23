/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md,html}", "./src/**/*.svg"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
