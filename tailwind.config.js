/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")], //plugins que instalamos con npm
};
