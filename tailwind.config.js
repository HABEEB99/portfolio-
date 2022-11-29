/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#BEBBBB",
        dark: "#2F243A",
        header: "#444054",
        btn: "#DB8A74",
        btnHov: "#FAC9B8",
        icon: "#FAC9B8",

        // light: "#F2E9DC",
        // dark: "#595959",
        // btn: "#CFD11A",
        // header: "#808F85",
        // icon: "#91C499",
        // light: "#ADA8B6",
        // dark: "#131200",
        // btn: "#573280",
        // btnHov: "#23022E",
        // icon: "#3F6C51",
      },
    },
  },
  plugins: [],
};
