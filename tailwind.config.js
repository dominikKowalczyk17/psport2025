/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./views/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        headerHeight: "130px",
      },
      transform: {
        "3d": "translate3d(0, 0, 0)",
      },
      boxShadow: {
        headerShadow: "0 -3px 0 0 #fff",
      }
    },
  },
  plugins: [],
}