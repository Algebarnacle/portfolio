import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "ex-small": "520px",
      "small": "660px",
      "medium": "870px",
      "large": "1020px"
    },
    extend: {
      colors: {
        "primary": "#200030",
        "secondary": "#9D44B5",
        "accent": "#1B998B"
      }
    },
  },
  plugins: [],
};
export default config;
