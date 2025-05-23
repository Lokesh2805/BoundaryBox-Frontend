/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ['Dosis', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        spartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

