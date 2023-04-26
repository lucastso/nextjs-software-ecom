/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
      xs: "360px",
    },
    fontFamily: {
      outfit: ["Outfit", "system-ui"],
      sofia: ["Sofia Sans Condensed", "system-ui"],
    },
  },
  plugins: [],
};
