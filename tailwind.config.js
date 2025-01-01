/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "black-33": "rgba(0, 0, 0, 0.33)",
        "gray-55": "rgba(255, 255, 255, 0.08)",
        "gray-ao": "#A0A0A0",
        "green-tua": "#183F18",
        "green-tua2": "#193219",
        "green-muda": "#0AB175",
        gray: {
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        custom: ["MyCustomFont", "sans-serif"],
        quick: ["Quicksand"],
        inter: ["Inter"],
      },
      fontSize: {
        tiny: "0.6rem",
        base: "1rem",
        big: "1.25rem",
        "extra-large": "2.5rem",
      },
      boxShadow: {
        bottom: "0 4px 6px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
