/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          '1024px': {'max': '1024px'}, // Custom breakpoint for <=1024px
        },
      },
    },
    plugins: [],
  };
  