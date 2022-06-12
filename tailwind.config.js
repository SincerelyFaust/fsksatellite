module.exports = {
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
      backgroundImage: {
        "sudditaliano":
          "linear-gradient(to left, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0)), url(/photos/sudditaliano.webp)",
        "sudditaliano-xl":
          "linear-gradient(to top, rgba(0, 0, 0, 0.9) 35%, rgba(0, 0, 0, 0)), url(/photos/sudditaliano.webp)",
      },
    },
  },
  plugins: [],
};
