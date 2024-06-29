/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        'dark-purple': '#500852',
        'medium-purple': '#6F4F84',
        'light-purple': '#DAA0FF',
        'light-cyan': '#BDFFFF',
        'magenta': '#AF486D',
        'cyan': '#4A8F94',
        'yellow': '#AB9E29',
        'green': '#2D9250',
        'black': '#181818',
        'white': '#FFFFFF',
        'gray': '#D9D9D9',
        'seo-bg-color': '#0065C1',
        'blue': '#6CB9FF',
        'web-bg-color': '#C17400',
        'orange': '#FFC700',
        'red': '#F85A50',
        'brand-bg-color': '#82150F'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}