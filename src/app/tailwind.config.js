// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        codoxyOrange: "#FF5733", // your custom color
      },
    },
  },
  plugins: [],
};

export default config;
