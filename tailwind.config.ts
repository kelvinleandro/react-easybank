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
        'dark-blue': "#2D314D",
        'lime-green': "#31D35C",
        'bright-cyan': "#2BB7DA",
        'grayish-blue': "#9698A6",
        'light-grayish-blue': "#F3F4F6",
        'very-light-gray': "#FAFAFA",
      }
    },
  },
  plugins: [],
};
export default config;
