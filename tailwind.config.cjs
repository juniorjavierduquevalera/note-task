/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#8AEBDE",
          "secondary": "#E38BA2",
          "accent": "#FFE1A1",
          "neutral": "#2a303c",
          "base-100": "#0f172a",
          "info": "#96BBEB",
          "success": "#7FEB8D",
          "warning": "#FBBD23",
          "error": "#B32614",
        },
      },
    ],
  }
}
