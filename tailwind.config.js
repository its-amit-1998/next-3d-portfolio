/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "header-animation-loading": {
          "0%": { transform: " translateY(-100%)", opacity: 0 },
          "25%": { opacity: 1 },
          "50%": { transform: " translateY(0%)", opacity: 1 },
          "100%": { transform: " translateY(0%)", opacity: 1 },
        },
      },
      animation: {
        "header-animation-loading": "header-animation-loading 0.5s ease",
      },
    },
  },
  plugins: [],
};
