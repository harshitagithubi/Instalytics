 module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        secondary: '#f97316',
        glass: 'rgba(255, 255, 255, 0.1)',
        glassDark: 'rgba(31, 41, 55, 0.5)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}