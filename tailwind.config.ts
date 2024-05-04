import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

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
        'secondary-background-gray':'#434343',
        'tertiary-background-gray':'rgba(145,145,140,1)'
        
      },
      'knight-blue': {
        '50': '#eef8ff',
        '100': '#daedff',
        '200': '#bce1ff',
        '300': '#8fcfff',
        '400': '#59b4ff',
        '500': '#429bfe',
        '600': '#1d74f3',
        '700': '#155de0',
        '800': '#184cb5',
        '900': '#19438f',
        '950': '#142a57',
    },
      
    
    },
  },
  plugins: [],
};
export default config;
