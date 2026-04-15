"use client";

import { useLanguage } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-xs font-bold text-foreground transition-colors hover:bg-muted"
      aria-label="Toggle language"
    >
      {locale === "en" ? "中" : "EN"}
    </button>
  );
}
