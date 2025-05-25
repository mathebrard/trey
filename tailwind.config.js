/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // s'assurer que tous les composants sont scannés
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C1B7B5',
        secondary: '#AC9F9C'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

