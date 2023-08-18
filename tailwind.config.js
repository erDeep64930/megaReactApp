/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        vibes: ["Great Vibes", "cursive"],
        tilt: ["Tilt Prism", "cursive"],
      },
      boxShadow: {
        IndiaShadow: [
          " -5px -5px 5px rgb(0,255,0) , 5px 5px 5px rgb(255,165,0)",
        ],
        CardShadow: ["0 5px 10px rgba(0,0,0,0.3)"],
      },
         keyframes:{
        'trans-right':{
          '0%,100%':{transform:'scaleX(1)',filter:'grayScale(1)'},
          '50%':{transform:'scaleX(1.1)',filter:'grayScale(0)',boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'}
        },
        'split':{
          '0%' :{transform:'translateX(100%)'},
          '40%,60%':{transform:'translate(0%)'},
          '100%':{transform:'translate(-100%)'},
        }
      },
        animation:{
          'trans-right':'trans-right 1.5s ease-in-out infinite',
        'split':'split 2s ease-in-out infinite',
        },
    },
  },

  plugins: [],
};
