/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'us-primary': "rgb(0 114 0)",
        'us-secondary': "#007200c2",
        'body-bg': "#1565c091",
        'border-body-bg': "#1565c0"
      },
    },
  },
  plugins: [],
}