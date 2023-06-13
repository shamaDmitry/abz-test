/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'home-banner': "url('./assets/pexels-alexandr-podvalny-1227513.jpeg')",
        'form-success': "url('./assets/success-image.svg')",
      },
      fontSize: {
        sm: ['12px', '14px'],
        base: ['16px', '26px'],
        title1: ['40px', '40px'],
      },
      colors: {
        "primary": "#F4E041",
        "primary-hover": "#FFE302",
        "secondary": "#00BDD3",
        "light-gray": "#F8F8F8",
      },
      screens: {
        sm: '360px',
        md: '768px',
        lg: '1024px',
        xl: '1170px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '580px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1290px',
          },
        }
      })
    }
  ],
}
