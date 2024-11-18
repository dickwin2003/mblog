/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      colors: {
        blue: {
          800: '#1e40af',
          700: '#1d4ed8',
          600: '#2563eb',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
