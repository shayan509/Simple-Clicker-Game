import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
      
        Fredoka: ["Fredoka"],
        ChelaOne: ["Chela One"],
      },
      screens: {
        "mobile" : {
          max: "500px"}
      }
    },
  },
  plugins: [],
} satisfies Config;
