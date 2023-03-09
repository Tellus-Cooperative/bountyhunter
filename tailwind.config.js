/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#DD211E",
        lightblue:"#5AA9E6",
        lightgrey: "#D9D9D9",
        cardscolor: "#F9F9F9",
        darkColor: "#979797",
        pinkColor: "#FF5F8A",
        lightPink: "#FF6392"
        
      }
    },
  },
  plugins: [],
}
