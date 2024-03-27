/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7f50", // Orange color resembling the warmth and sweetness of baked goods
        secondary: "#ffd700", // Gold color representing quality and richness
        tertiary: "#f4a460", // Light brown color resembling the color of baked cakes
        background: "#fafafa",
        alte: "#f2ebe2",
        pink: "#e37277",
        chocolate: "#5e3b3e",
      },
      fontFamily: {
        dancing_script: ["var(--font-dancing_script)"],
      },
    },
  },
  plugins: [],
};
