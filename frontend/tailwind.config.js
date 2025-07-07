/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'ig-pink': '#833AB4',
        'ig-pink-light': '#9b5fc6',
        'ig-red': '#E1306C',
        'ig-red-light': '#ff4f81',
        'ig-orange': '#F77737',
        'ig-orange-light': '#ff8e53',
        'ig-yellow': '#FCAF45',
        'ig-yellow-light': '#ffc469',
        'ig-primary': '#0095F6',
        'ig-primary-light': '#33aaf8',
        'ig-secondary': '#385185',
        'ig-dark': '#262626',
        'ig-darker': '#121212',
        'ig-light': '#FAFAFA',
        'ig-border': '#DBDBDB',
        'ig-text': '#8E8E8E',
        'ig-error': '#ED4956',
        'ig-gradient-1': '#833AB4',
        'ig-gradient-2': '#C13584',
        'ig-gradient-3': '#E1306C',
        'ig-gradient-4': '#FD1D1D',
        'ig-gradient-5': '#F77737',
        'ig-gradient-6': '#FCAF45'
      },
      fontFamily: {
        alfa: ['"Alfa Slab One"', 'cursive'],
      },
      backgroundImage: {
        'ig-gradient': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'ig-gradient-button': 'linear-gradient(to right, #833AB4, #E1306C)',
        'ig-gradient-radial': 'radial-gradient(circle, #833AB4, #E1306C, #FCAF45)'
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'gradient-y': 'gradient-y 8s ease infinite',
        'gradient-xy': 'gradient-xy 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  darkMode: 'class'
}
