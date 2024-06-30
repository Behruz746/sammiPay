/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        lightWhite: "rgba(255, 255, 255, 0.7)",
        lightBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      // classslarda shu px lardan katta bolsa stylelar o'zgaradi
      xl: "1700px",
      lg: "1200px",
      md: "1060px",
      sm: "768px",
      ss: "620px",
      xs: "480px",
    },
  },
  plugins: [],
};
