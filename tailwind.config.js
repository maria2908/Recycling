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
      'footer-green': '#2c5848',
      'my-blue': '#adcacb',
      'my-dark-blue': '#2f8bfd',
      'my-beg': '#fee3a2',
      'my-yellow': '#fff61a',
      'my-dark-orange': '#ee5601',
      'my-light-orange': '#f48540',
      'black': '#000',
      'gray' : '#b3b3b3'
    }
  },
  plugins: [],
  darkMode: 'class',
}