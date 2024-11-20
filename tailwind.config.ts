import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        christmas: {
          red: '#8B0000',
          green: '#013220',
          white: '#F8F9FA',
          gold: '#D4AF37',
        },
        dark: {
          background: '#121212',
          surface: '#1E1E1E',
          text: '#E0E0E0',
        },
      },

      borderColor: {
        DEFAULT: 'black', // 라이트 모드 기본값
        dark: 'white', // 다크 모드 기본값
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
