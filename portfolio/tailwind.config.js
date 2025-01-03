/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   
  ],
  darkMode:'class',
  theme: {
    extend: {},
  },
    theme: {
      extend: {
        keyframes: {
          fadeSlideUp: {
            '0%': { opacity: 0, transform: 'translateY(170px)' },
            '100%': { opacity: 9, transform: 'translateY(0)' },
          },
        
        },
        animation: {
          'fade-slide-up': 'fadeSlideUp 2s ease-in-out',
          
        },
      },
    },
  plugins: [],
}

