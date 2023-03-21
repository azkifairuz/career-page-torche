/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#0b122a",
        darkGrey: "#444444",
        primaryNavy: {
          main: "#0B122A",
        },
        primaryBlue: {
          main: "#5885E9",
        },
        neutral: {
          100: "#151515",
        }
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
