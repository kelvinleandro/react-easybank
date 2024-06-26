import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'darkBlue': "#2D314D",
        'limeGreen': "#31D35C",
        'brightCyan': "#2BB7DA",
        'grayishBlue': "#9698A6",
        'lightGrayishBlue': "#F3F4F6",
        'veryLightGray': "#FAFAFA",
      }
    },
  },
  plugins: [],
};
export default config;
