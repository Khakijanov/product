/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primaryColor:'#260F08',
        secondaryColor:'#C73B0F',
        textColor: '#87635A',
        titleColor:'#260F08',
        bgColor:'#ffff',
        
        
      }
    },
  },
  plugins: [require('daisyui'),],
}

