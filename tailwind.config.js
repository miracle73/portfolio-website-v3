/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'javanese-text': ['Javanese Text'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  
}

