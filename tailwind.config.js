/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f3e72",
        secondary: "rgba(255,255,255,0.78)",
        realBlack: "#131110",
        blue: "#4066ff",
        lightBlue: "#eeeeff",
        gradientDarkBlue: "#2949c6",
        gradientSkin: "#ffb978",
        gradientOrange: "#ff7b00",
      },
      boxShadow: {
        "bx-shadow": "0px 23px 21px -8px rgba(136,160,255,0.25)",
      },
    },
  },
  plugins: [],
};
