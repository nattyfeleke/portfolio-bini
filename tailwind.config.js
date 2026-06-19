
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0F',
        primary: '#F0EDE8',
        accent: '#7B5CF0',
        surface: '#14141A',
        'surface-hover': '#1C1C24',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      lineHeight: {
        relaxed: '1.7',
      },
      animation: {
        'orb-float': 'orb-float 20s ease-in-out infinite',
      },
      keyframes: {
        'orb-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}
