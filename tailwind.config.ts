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
      animation: {
        fadeUp: `fadeUp 1.5s ease-in-out`
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: `translateY(50px)`
          },
          '100%': {
            opacity: '1',
            transform: `translateY(0px)`
          }
        }
      }
    },
  },
  plugins: [],
} satisfies Config;
