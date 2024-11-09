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
        background: "var(--background)",
        foreground: "var(--foreground)",
        lamaSky: "#c3ebfa",
        lamaSkyLight: "#edf9fd",
        lamaPurple: "#cfceff",
        lamaskyLight: "#fif0ff",
        lamaYellow: "#fae27c",
        lamaYellowLight: "#edf9fd",
      },
    },
  },
  plugins: [],
};
export default config;
