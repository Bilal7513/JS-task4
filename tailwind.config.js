/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./style.css','./script.js'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'EerieBlack': "#0b1629", 
        'PastelRed': "#bc4123" 
      },
      keyframes: {
        fade: {
          '0%': { transform: 'translateX(2)', opacity: '0'},
          '20%, 80%': { transform: 'translateX(0)', opacity: '1'},
          '100%': { transform: 'translateX(-2)', opacity: '0'},
        }
      },
      animation: {
        fade: 'fade 5s',
      }
    },
  },
  plugins: [],
}

