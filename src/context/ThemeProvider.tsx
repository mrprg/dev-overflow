"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: String) => void;
}

const ThemeContext = createContext<
  ThemeContextType | undefined
>(undefined);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("dark");

  const handleThemeChange = React.useCallback(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [mode]);

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "useTheme must be used whithin a ThemeProvider"
    );
  }

  return context;
}
