/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'my-green': '#87c159',
      'my-dark-green': '#058240',
      'my-blue': '#adcacb',
      'my-dark-blue': '#0751c3',
      'my-beg': '#fee3a2',
      'my-yellow': '#f3c301',
      'my-dark-orange': '#ee5601',
      'my-light-orange': '#f48540'
    }
  },
  plugins: [],
  darkMode: 'class',
}