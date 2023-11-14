/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "header-animation-loading": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "home-subtitle-animation": {
          from: { transform: "translateY(40%)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
        "eye-animation": {
          "0%": { transform: "scale(.3)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        "opacity-animation": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "header-animation-loading": "header-animation-loading 0.5s",
        // "home-subtitle-animation": "home-subtitle-animation 0.5s ease-out 1s both",
        "eye-animation": "eye-animation 2s ease",
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
};
