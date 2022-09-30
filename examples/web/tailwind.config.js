const { theme } = require("@expo/styleguide/tailwind");
console.log({ theme });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme,
  plugins: [],
};
