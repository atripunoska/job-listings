/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(180, 29%, 50%)",
        "light-grayish-cyan": "hsl(180, 52%, 96%)",
        "dark-gray-cyan": "hsl(180, 8%, 52%)",
        "very-dark-gray-cyan": "hsl(180, 14%, 20%)",
      },
    },
    fontFamily: {
      sans: ['"League Spartan", sans-serif'],
    },
  },
  plugins: [],
};
