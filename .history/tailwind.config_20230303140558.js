/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      offwhite: "#909090",
      transparent: "transparent",
      goodblack: "#282828",
      goodbrown: "#414141",
      goodwhite: "#dcdcdc",
      goodred: "#333333",
    },

    extend: {},
  },
  plugins: [],
};
