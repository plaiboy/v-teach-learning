module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_01": "#020101",
          "900_2b": "#0201012b",
          "900_33": "#02010133",
        },
        teal: { 800: "#156f5b" },
        gray: {
          100: "#f3f8f7",
          800: "#4d4d4d",
          900: "#212121",
          "900_01": "#1f1f1f",
        },
        white: { A700: "#ffffff" },
        orange: { 200: "#f3bf6c" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
