"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type FontType = "sans" | "serif" | "mono";

interface FontContextProps {
  font: FontType;
  setFont: (font: FontType) => void;
}

const FontContext = createContext<FontContextProps | undefined>(undefined);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  // Font state, initially null until loaded from localStorage
  const [font, setFontState] = useState<FontType | null>(null);

  // Load font preference on mount and apply CSS class to <html>
  useEffect(() => {
    const storedFont = (localStorage.getItem("font") as FontType) || "sans";
    document.documentElement.classList.add(`font-${storedFont}`);
    setFontState(storedFont);
  }, []);

  // Update font both in state, localStorage, and html class
  const setFont = (newFont: FontType) => {
    if (!font) return;

    document.documentElement.classList.remove(`font-${font}`);
    document.documentElement.classList.add(`font-${newFont}`);
    localStorage.setItem("font", newFont);
    setFontState(newFont);
  };

  // Prevent rendering until font is initialized to avoid flicker
  if (!font) return null;

  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

// Hook to access font context safely
export const useFont = (): FontContextProps => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error("useFont must be used within a FontProvider");
  }
  return context;
};
