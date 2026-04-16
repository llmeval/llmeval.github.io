"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

function TimeBasedThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return;

    const hour = new Date().getHours();
    const isDark = hour >= 19 || hour < 7;
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, []);

  return null;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <TimeBasedThemeInit />
      {children}
    </NextThemesProvider>
  );
}
