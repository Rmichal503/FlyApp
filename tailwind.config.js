/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'sm-min': '640px',
      // => @media (min-width: 640px) { ... }

      'md-min': '768px',
      // => @media (min-width: 768px) { ... }

      'lg-min': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl-min': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl-min': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'Marker': 'Permanent Marker',
      'SC': 'Ysabeau SC'
    },
    extend: {
      colors:{
        primary:{
          color:'#4E46B4',
          hover: '#4840a5',
          buttonText: '#EBEBEB',
          bodyText: '#000000'
        },
        secondary: {
          color:'#40A69F',
          hover:'#50ada7',
          buttonText: '#000000',
          bodyText:'#999CA0'
        },
        border:{
          color:'#EBEBEB',
          hover:'#d7d7d7'
        },
        background:'#F5F5F5',
        backdrop:'#464749'
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(10px)' }
        }
      },
      animation: {
        move: 'move .5s ease-in-out 1',
      }
    },
  },
  plugins: [],
}
