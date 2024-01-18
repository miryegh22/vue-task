/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coverImg: "url('/cover.png')",
      },
      colors: {
        pastel: "#EDEFFB",
        blue: "#11103C",
        periwinkle: "#7367F0",
        lavender: "#E8E7FD",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      cursor: {
        pointer: "url('./assets/icons/hand.svg'), pointer",
      },
    },
  },
  plugins: [],
};
