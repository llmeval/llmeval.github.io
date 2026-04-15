"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";
import dict, { type Locale, type DictKey } from "./dict";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictKey, vars?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("llmeval-lang") as Locale | null;
    if (saved && (saved === "en" || saved === "zh")) {
      setLocaleState(saved);
    } else if (navigator.language.startsWith("zh")) {
      setLocaleState("zh");
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("llmeval-lang", l);
  }, []);

  const t = useCallback(
    (key: DictKey, vars?: Record<string, string>): string => {
      let text: string = dict[locale][key] ?? dict.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, v);
        }
      }
      return text;
    },
    [locale]
  );

  if (!mounted) {
    const tFallback = (key: DictKey, vars?: Record<string, string>): string => {
      let text: string = dict.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          text = text.replace(`{${k}}`, v);
        }
      }
      return text;
    };
    return (
      <I18nContext.Provider value={{ locale: "en", setLocale, t: tFallback }}>
        {children}
      </I18nContext.Provider>
    );
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
