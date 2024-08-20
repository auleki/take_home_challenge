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
        gray: {
          400: "hsla(226, 45%, 94%, 1)",
          300: "hsla(208, 7%, 46%, 1)",
          200: "hsla(0, 0%, 91%, 1)",
        },
        black: {
          400: "hsla(0, 0%, 18%, 1)"
        },
        white: {
          300: "hsla(220, 27%, 98%, 1)",
          400: "#ffffff"
        },
        purple: {
          500: "hsla(246, 59%, 40%, 1)"
        }
      }
    },
  },
  plugins: [],
};
export default config;
