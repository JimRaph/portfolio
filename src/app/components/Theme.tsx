'use client'
import { useEffect, useState, createContext, useContext } from 'react'

interface ThemeContextProp {
  isDark: boolean | null;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextProp>({
  isDark: null,
  toggleDarkMode: () => { },
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

useEffect(() => {
  const root = document.documentElement;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme: string | null) => {
    const prefersDark = mediaQuery.matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  };

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme);

  const handleChange = () => {
    if (!localStorage.getItem('theme')) {
      applyTheme(null);
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
  

const toggleDarkMode = () => {
    const isNowDark = !document.documentElement.classList.contains('dark');
    if (isNowDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);