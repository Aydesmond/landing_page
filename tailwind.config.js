module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        red_900: "#a90125",
        amber_300: "#ffdc62",
        orange_500: "#ff9800",
        white_A700: "#ffffff",
      },
      fontFamily: { opensans: "Open Sans", coolvetica: "Coolvetica" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
