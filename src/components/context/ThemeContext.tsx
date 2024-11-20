'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ThemeState = {
  isDarkMode: boolean;
  isChristmas: boolean;
  toggleDarkMode: () => void;
  toggleChristmasTheme: () => void;
};

const ThemeContext = createContext<ThemeState | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isChristmas, setIsChristmas] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const root = window.document.documentElement;
    if (!isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggleChristmasTheme = () => {
    setIsChristmas((prev) => !prev);
    const root = window.document.documentElement;
    if (!isChristmas) {
      root.classList.add('christmas');
    } else {
      root.classList.remove('christmas');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        isChristmas,
        toggleDarkMode,
        toggleChristmasTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
