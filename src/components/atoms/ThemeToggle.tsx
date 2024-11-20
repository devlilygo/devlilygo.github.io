'use client';

import { useTheme } from '@/components/context/ThemeContext';
import ChristmasIcon from '@/images/winter-hat-christmas-svgrepo-com.svg';
import ChristmasIconBW from '@/images/winter-hat-christmas-svgrepo-com-black-and-white.svg';
import LightModeIcon from '@/images/moon-sun-svgrepo-com-light.svg';
import DarkModeIcon from '@/images/moon-sun-svgrepo-com-dark.svg';

export default function ThemeToggle() {
  const { isDarkMode, isChristmas, toggleDarkMode, toggleChristmasTheme } =
    useTheme();

  return (
    <div className="flex w-full h-full gap-2 text-xs items-center text-nowrap">
      {isDarkMode ? (
        <LightModeIcon
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleDarkMode}
        />
      ) : (
        <DarkModeIcon
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleDarkMode}
        />
      )}

      {isChristmas ? (
        <ChristmasIcon
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleChristmasTheme}
        />
      ) : (
        <ChristmasIconBW
          className="w-16 h-16 p-2 hover:cursor-pointer"
          onClick={toggleChristmasTheme}
        />
      )}
    </div>
  );
}
