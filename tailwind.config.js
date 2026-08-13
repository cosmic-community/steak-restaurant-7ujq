/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f7f6f5',
          100: '#e8e5e2',
          200: '#d1cbc4',
          300: '#b0a89d',
          400: '#8a7f72',
          500: '#6b5f52',
          600: '#544a40',
          700: '#443b33',
          800: '#2e2823',
          900: '#1a1512',
          950: '#0f0c0a',
        },
        ember: {
          50: '#fef6ee',
          100: '#fdead7',
          200: '#fad2ae',
          300: '#f6b17a',
          400: '#f18844',
          500: '#ec6820',
          600: '#dd4f16',
          700: '#b73a14',
          800: '#922f18',
          900: '#762916',
          950: '#3f130a',
        },
        gold: {
          400: '#e0b872',
          500: '#c9a227',
          600: '#a5811d',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}