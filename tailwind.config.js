/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'serif'],
        'jakarta': ['Plus Jakarta Sans', 'serif'],
      },
      colors: {
  background: "#1F1E25",
  mango: "#FED049",
  ungu: "#A12568",
  abu: "#AEA7A7",
      },
      padding: {
        30: "120px",
      },
      
    },
  },
  plugins: [],
}
