module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        DarkVector80: "url('./assets/images/DarkVector80.png')",
        DarkVector81: "url('./assets/images/DarkVector81.png')",
        Vector80: "url('./assets/images/Vector80.png')",
        Vector81: "url('./assets/images/Vector81.png')",
      },
    },
    colors: {
      color1: "#6D47E4",
      color2: "#101115",
      color3: "#F9FBFD",
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
  },
  plugins: [],
  darkMode: "class",
};
