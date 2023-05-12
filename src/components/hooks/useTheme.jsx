import {
  useState, useEffect, useContext, createContext, useMemo,
} from 'react';

const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ?? 'light',
  );

  useEffect(() => {
    const root = document.body;
    const oldTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.remove(oldTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      { children }
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
