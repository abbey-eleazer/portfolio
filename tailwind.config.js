/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto, sans serif'],
        serif: ['Montserrat, sans serif'],
      },
      colors: {
        'colorPrimary': '#00000d',
        'colorSecondary': '#de6502',
        'colorTertiary': '#33a4ff',
        'colorText': '#bfc3c9',
      },
      
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
