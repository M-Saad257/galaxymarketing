'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ALL_THEMES, ThemeConfig, NEW_SAPPHIRE_THEME } from '@/data/themes/savedTheme';

interface ThemeContextType {
  currentTheme: ThemeConfig;
  setThemeById: (id: string) => void;
  allThemes: ThemeConfig[];
}

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: NEW_SAPPHIRE_THEME,
  setThemeById: () => {},
  allThemes: ALL_THEMES,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to the brand new theme!
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(NEW_SAPPHIRE_THEME);

  useEffect(() => {
    // Check localStorage for saved choice, otherwise use New Sapphire Theme
    const savedId = localStorage.getItem('galaxy-marketing-theme');
    if (savedId) {
      const match = ALL_THEMES.find((t) => t.id === savedId);
      if (match) {
        setCurrentTheme(match);
        applyTheme(match);
        return;
      }
    }
    // Default apply new theme
    applyTheme(NEW_SAPPHIRE_THEME);
  }, []);

  const applyTheme = (theme: ThemeConfig) => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme.id);

    // Set custom CSS properties dynamically
    root.style.setProperty('--primary', theme.colors.primary);
    root.style.setProperty('--primary-hover', theme.colors.primaryHover);
    root.style.setProperty('--primary-light', theme.colors.primaryLight);
    root.style.setProperty('--primary-border', theme.colors.primaryBorder);
    root.style.setProperty('--primary-text', theme.colors.primaryText);
    root.style.setProperty('--secondary', theme.colors.secondary);
    root.style.setProperty('--theme-bg', theme.colors.themeBg);
    root.style.setProperty('--theme-surface', theme.colors.themeSurface);
    root.style.setProperty('--theme-card', theme.colors.themeCard);
    root.style.setProperty('--theme-heading', theme.colors.themeHeading);
    root.style.setProperty('--theme-body', theme.colors.themeBody);
    root.style.setProperty('--theme-muted', theme.colors.themeMuted);
    root.style.setProperty('--theme-border', theme.colors.themeBorder);
    root.style.setProperty('--font-sans', theme.fonts.sans);
    root.style.setProperty('--font-serif', theme.fonts.serif);
  };

  const setThemeById = (id: string) => {
    const match = ALL_THEMES.find((t) => t.id === id);
    if (match) {
      setCurrentTheme(match);
      applyTheme(match);
      localStorage.setItem('galaxy-marketing-theme', id);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setThemeById,
        allThemes: ALL_THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

