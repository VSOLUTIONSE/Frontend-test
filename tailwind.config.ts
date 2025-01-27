import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: {
        max: "768px",
      },
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sofia-sans)"], // Default sans font
        pangram: ["var(--font-pangram)"], // Pangram font
        courgette: ["var(--font-courgette)"], // Courgette font
      },
      colors: {
        "primary-orange": "#D87023",
        "primary-green": "#009F79",
        "primary-ash": "#858786"
      },
    },
  },
  plugins: [],
} satisfies Config;
