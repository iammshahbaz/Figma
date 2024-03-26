/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        'green' : "rgba(76, 175, 79, 1)",
        'silver' : "rgba(245, 247, 250, 1)",
        'grey' : "rgba(77, 77, 77, 1)",
        'textGrey' : "rgba(113, 113, 113, 1)"
      }
    },
  },
  plugins: [],
}