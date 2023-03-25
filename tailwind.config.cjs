/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'prev-arrow': "url('/src/assets/images/slider/arrow-prev.svg')",
        'next-arrow': "url('/src/assets/images/slider/arrow-next.svg')",
        button: "url('/src/assets/buttonBackground.png')",
        hot: "url('/src/assets/card/cardType/hot.svg')",
        baked: "url('/src/assets/card/cardType/baked.svg')",
        dropDownArrow: "url('src/assets/images/icons/navigation/arrowDropdown.svg')",
      },
      backgroundColor: {
        accent: '',
      },
      boxShadow: {
        '3xl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
    },
  },
  plugins: [],
};
