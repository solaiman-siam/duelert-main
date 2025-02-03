/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins : ["Poppins", "serif"]
      },
      colors: {
        primary: '#F41435',
        black001: '#222F3E',
        primaryDescription: '#5A5C5F',
      }
    },
  },
  plugins: [],
}