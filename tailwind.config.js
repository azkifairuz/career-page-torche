/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: {
          main:"#5885E9",
          surface:"#F5F7FF",
          border:"#B1C4F0",
          hover:"#4D74CC",
          pressed:"#385494",
          focus:"#5885E933",
        },
        primaryNavy: {
          main:"#0B122A",
          surface:"#F5F8FF",
          border:"#A7ABB8",
          hover:"#3E5294",
          pressed:"#090D14",
          focus:"#0B122A33",
        },
        secondary: {
          white:"#D8D8D8",
          purple:"#9284F1",
          tosca:"#51C1CB",
          orange:"#FF6442",
          yellow:"#FFAE5F",
          
        },
        success: {
          main:"#257B57",
          surface:"#F2FFF9",
          border:"#B0D1C3",
          hover:"#1F6648",
          pressed:"#103D2A",
          focus:"#257B5733",
        },
        warning: {
          main:   "#B98828",
          surface:"#FFFAF0",
          border: "#D9C9AB",
          hover:  "#A37823",
          pressed:"#523B0F",
          focus:  "#B9882833",
        },
        danger: {
          main:   "#C63B32",
          surface:"#FFF8F7",
          border: "#DBB6B4",
          hover:  "#A5322B",
          pressed:"#661B16",
          focus:  "#C63B3233",
        },
        info: {
          main:   "#7461C2",
          surface:"#F9F7FF",
          border: "#C0B8DB",
          hover:  "#6454A2",
          pressed:"#392E66",
          focus:  "#7461C233",
        },
        darkGrey: "#444444",
        neutral : {
          100:"#FFFFFF",
          200:"#F3F3F3",
          300:"#E1E1E1",
          400:"#D8D8D8",
          500:"#A7A7A7",
          600:"#999999",
          700:"#727272",
          800:"#5A5A5A",
          900:"#494949",
          1000:"#151515",
        },
       
      },
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow:{
        card: "0 0px 10px rgb(0 0 0 / 0.2)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
