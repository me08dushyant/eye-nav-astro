/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      purple: "#551A79",
      orange: "#F16923",
      gray: colors.gray,
      violet: colors.violet,
    },
    fontFamily: {
      inter: ["Inter"],

      lilita: ["Lilita-One"],
      text: ["Poppins"],
      heading: ["Inter"],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
