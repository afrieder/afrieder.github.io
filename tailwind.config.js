/** @type {import('tailwindcss').Config} */

const HEIGHT = '222px';
const TALL_HEIGHT = '322px';

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { height: '0px' },
          '100%': { height: HEIGHT },
        },
        'fade-out': {
          '0%': { height: HEIGHT },
          '100%': { height: '0px' },
        },
        'fade-in-tall': {
          '0%': { height: '0px' },
          '100%': { height: TALL_HEIGHT },
        },
        'fade-out-tall': {
          '0%': { height: TALL_HEIGHT },
          '100%': { height: '0px' },
        },
      },
      animation: {
        'fade-in': 'fade-in 500ms ease-in-out forwards',
        'fade-out': 'fade-out 500ms ease-in-out forwards',
        'fade-in-tall': 'fade-in-tall 500ms ease-in-out forwards',
        'fade-out-tall': 'fade-out-tall 500ms ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
