/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        
        
      
      },
      spacing: {
        '13': '5.5rem',
        '15': '3.75rem',
        '128': '105px',
        '144': '36rem',
      }
    },
  },
  plugins: [],
}
