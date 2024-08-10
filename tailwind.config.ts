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
        500: "#319795",
      },
      white: "#fff",
      darkblue: "#1a202c",
    },
  },
  plugins: [tailWindTypograhy],
};
export default config;
