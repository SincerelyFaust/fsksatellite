module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        swampwitch: ["SwampWitch", "cursive"],
      },
      screens: {
        "2xl": { max: "1620px" },
        "xl": { max: "1486px" },
        "lg": { max: "1025px" },
        "md": { max: "968px" },
        "sm": { max: "740px" },
      },
      fontSize: {
        "10xl": "13rem",
      },
      boxShadow: {
        red: "10px 10px red",
      },
    },
  },
  plugins: [],
};
