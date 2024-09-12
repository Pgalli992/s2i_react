/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F7FBF7",
          200: "#E7F2E6",
          300: "#D7EAD5",
          400: "#C7E2C4",
          500: "#B7D9B3",
          600: "#AFD5AB",
          700: "#8CAA89",
          800: "#698067",
          900: "#465544",
        },
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      gridTemplateColumns: {
        header: "1fr 2fr 1fr",
      },
    },
    plugins: [],
  },
};
