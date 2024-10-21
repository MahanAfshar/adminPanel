import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackOne: 'rgba(20, 20, 20, 1)',
        grayOne: 'rgba(28, 28, 28, 1)',
        grayTwo: 'rgba(123, 123, 123, 1)',
        grayThree: 'rgba(38, 38, 38, 1)',
        greenOne: 'rgba(43, 207, 161, 1)',
        whiteOne: 'rgba(255, 255, 255, 0.4)'
      },
    },
  },
  plugins: [],
};
export default config;
