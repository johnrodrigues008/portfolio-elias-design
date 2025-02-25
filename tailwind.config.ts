import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxl': '1333px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        flip: {  // 🔥 Correção: Agora dentro de keyframes!
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Gira a cada 3 segundos
        'spin-fast': 'spin 0.5s linear infinite', // Gira rápido
        'flip-slow': 'flip 8s linear infinite', // Gira a cada 3 segundos
        'flip-fast': 'flip 0.5s linear infinite', // Gira rápido
      },
    },
  },
  plugins: [],
} satisfies Config;
