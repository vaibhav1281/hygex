/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        flip: 'flip 0.5s linear',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(222.94deg, #051A91 -4.31%, #061C93 14.41%, #2284F1 81.88%, #1F80EB 103.81%)',
        'custom-gradient1': 'linear-gradient(222.94deg, #091f4b -4.31%, #164371 14.41%, #20608e 81.88%, #2c85b4 103.81%)',
        'custom-gradient2': 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
      },
      
    },
  },
  plugins: [],
}