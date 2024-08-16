/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "#81cde4",
        secondary: "#1f7893",
      },
    },
    fontFamily: {
      "hero-Font": "Titillium",
    },
  },
  plugins: [],
};
