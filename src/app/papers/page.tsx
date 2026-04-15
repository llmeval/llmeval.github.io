"use client";

import { useState } from "react";
import { PaperCard } from "@/components/PaperCard";
import { papers, allTags, allYears } from "@/data/papers";
import { useLanguage } from "@/lib/i18n";

export default function PapersPage() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filtered = papers.filter((p) => {
    if (selectedYear && p.year !== selectedYear) return false;
    if (selectedTag && !p.tags.includes(selectedTag)) return false;
    return true;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">{t("papers.title")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{t("papers.desc")}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("papers.year")}</span>
          <button
            onClick={() => setSelectedYear(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedYear === null ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("common.all")}
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(selectedYear === year ? null : year)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedYear === year ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">{t("papers.topic")}</span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedTag === null ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("common.all")}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedTag === tag ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        {t("papers.showing", { n: String(filtered.length), total: String(papers.length) })}
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((paper, i) => (
          <PaperCard key={paper.id} paper={paper} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">{t("papers.noMatch")}</p>
          <button
            onClick={() => { setSelectedYear(null); setSelectedTag(null); }}
            className="mt-4 text-sm font-medium text-accent hover:text-accent/80"
          >
            {t("papers.clear")}
          </button>
        </div>
      )}
    </div>
  );
}
