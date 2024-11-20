'use client';

import { useTheme } from '@/components/context/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, isChristmas, toggleDarkMode, toggleChristmasTheme } =
    useTheme();

  return (
    <div className="flex flex-col w-full h-full gap-2 text-xs justify-between items-center text-nowrap">
      <button
        onClick={toggleDarkMode}
        className={`py-2 px-4 rounded mr-2 ml-2 italic ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
        }`}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button
        onClick={toggleChristmasTheme}
        className={`py-2 px-4 rounded mr-2 ml-2 italic ${
          isChristmas ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
        }`}
      >
        {isChristmas ? 'Turn Off Christmas 🎄' : 'Turn On Christmas 🎅'}
      </button>
    </div>
  );
}
