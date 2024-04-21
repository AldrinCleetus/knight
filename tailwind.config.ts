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
          'grid-pattern': `url('/background_images/grid.png')`
      },
      colors: {
        'primary-background-black': '#1C1D1E',
        'gradient-background-from' : 'rgba(153, 153, 153, 0.5)',
        'gradient-background-to' : 'rgba(153, 153, 153, 0.1)',
        'text-secondary-light-gray':'#8E8E8E',
        'primary-cyan': "#1ABCFE",

      }
    },
  },
  plugins: [],
};
export default config;
