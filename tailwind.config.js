/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "sans-serif"],
        ballet: ["Ballet", "cursive"],
        bodoni: ["Bodoni Moda", "serif"],
        fira: ["Fira Mono", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        highlight: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        glow: {
          "0%": {
            textShadow: "0 0 0px rgba(255,255,255,0)",
          },
          "100%": {
            textShadow: "0 0 8px rgba(255,255,255,0.8)",
          },
        },
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out both",
        highlight: "highlight 1s ease-out forwards",
        glow: "glow 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
