
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        primary: "#2F4F2F",
        secondary: "#8B4513",
        buttonColor: '#FF8C00', 
        navbarBg: "#FFE0C9",
        cardBgColor : '#FFEBDC'
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        georgia : ['Georgia']
      },
    },
  },
  plugins: [],
};
