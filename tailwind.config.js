/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelBlue: "#AAC2F2",
        blushPink: "#FBD6E3",
        cloudMist: "#F8FAFF",
        iceBlue: "#C2E7FF",
        babyLavender: "#D9D9F3",
        charcoalGray: "#3E4A5C",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
        ballet: ["Ballet", "cursive"],
        bodoni: ["Bodoni Moda", "serif"],
        fira: ["Fira Mono", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
        jost: ["Jost", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        highlight: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        glow: {
          "0%": {
            textShadow: "0 0 0px rgba(255,255,255,0)",
          },
          "100%": {
            textShadow: "0 0 8px rgba(255,255,255,0.8)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-8px)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out both",
        highlight: "highlight 1s ease-out forwards",
        glow: "glow 1.5s ease-out forwards",
        float: "float 4s ease-in-out infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
