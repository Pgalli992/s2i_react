/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#f4fce3",
          200: "#e9fac8",
          300: "#d8f5a2",
          400: "#c0eb75",
          500: "#a9e34b",
          600: "#94d82d",
          700: "#82c91e",
          800: "#74b816",
          900: "#5c940d",
        },
      },

      gridTemplateColumns: {
        header: "1fr 2fr 1fr",
      },
    },
    plugins: [],
  },
};
