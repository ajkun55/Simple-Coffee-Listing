/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1B1D1F",
        darker: "#111315",
        gray: "#6F757C",
        "light-green": "#BEE3CC",
        "light-yellow": "#FEF7EE",
        yellow: "#F6C768",
        "orange-red": "#ED735D",
      },
    },
  },
  plugins: [],
};
