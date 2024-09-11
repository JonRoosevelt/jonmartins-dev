import type { Config } from "tailwindcss";
import tailWindTypograhy from "@tailwindcss/typography";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      gray: {
        200: "#718096",
        300: "#313742",
        500: "#171923",
        700: "#111827",
      },
      green: {
        100: "#B2F5EA",
        500: "#319795",
      },
      white: "#fff",
      darkblue: "#1a202c",
    },
    extend: {
      keyframes: {
        stack: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%)",
            filter: "drop-shadow(-2px 3px 0 red) drop-shadow(2px -3px 0 blue)",
          },
          "60%": {
            opacity: "0.5",
            transform: "translateX(50%)",
          },
          "80%": {
            transform: "none",
            opacity: "1",
            filter: "drop-shadow(2px -3px 0 red) drop-shadow(-2px 3px 0 blue)",
          },
          "100%": {
            filter: "drop-shadow(none)",
          },
        },
        glitch: {
          "0%": {
            filter: "drop-shadow(-2px 3px 0 red) drop-shadow(2px -3px 0 blue)",
            transform: "translate(var(--glitch-translate))",
          },
          "2%": {
            filter: "drop-shadow(2px -2px 0 red) drop-shadow(-2px 2px 0 blue)",
          },
          "4%, 100%": {
            filter: "drop-shadow(none)",
            transform: "none",
          },
        },
      },
      animation: {
        stack: "stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards",
        glitch: "glitch 1s ease infinite alternate-reverse",
      },
    },
  },
  plugins: [tailWindTypograhy],
};
export default config;
