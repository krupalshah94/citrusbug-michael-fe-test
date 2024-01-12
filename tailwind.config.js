/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'Open Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      neue: ['Bebas Neue', 'cursive'],
    },
    extend: {
    
      container: {
        center: true,
        screens: {
          xl: '1148px', // Extra-large screens (1280px)
        },
        padding: {
          DEFAULT: '.8rem',
        },
      },
      height: {
        fortySix: '46px',
      },
      spacing: {
        4.5: '18px',
      },
    },
    boxShadow: {
      '3xl': '0px 4px 40px rgba(0, 0, 0, 0.15)',
      '4xl': '0px 4px 45px rgba(0, 0, 0, 0.15)',
      '5xl': '0px 4px 4px 0px rgba(78, 61, 64, 0.05)',

    },
    // eslint-disable-next-line
    fontFamily: {
      poppins: ['Poppins'],
      aviano: ['Aviano'],
      bebas: ['Bebas Neue'],
    },
    maxWidth: {
      twoSixtyEight: '268px',
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}