/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Here, we're extending the default colors
      colors: {
        "orange-custom": "#f59331",
        "cyan-custom": "#48f7f5",
        "grey-custom": "#054085",
        "blue-custom": "#1a75e0",
      },
    },
  },
  plugins: [],
};
