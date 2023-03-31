/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // boxShadow: {
      //   'lg': '12px 12px 24px (#d9d9d9), -12px -12px 24px (#ffffff)', 
      // },
      colors: {
        orange: {
          500: '#f5a623'
        }
      }
    },
  },
  plugins: [],
}
