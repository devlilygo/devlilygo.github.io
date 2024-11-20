'use client';

import { useDarkMode } from '@/components/context/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex text-xs justify-center items-center bg-gray-800 text-white p-2 rounded text-nowrap dark:bg-white dark:text-black"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
