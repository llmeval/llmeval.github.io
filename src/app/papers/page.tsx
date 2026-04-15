"use client";

import { useState } from "react";
import { PaperCard } from "@/components/PaperCard";
import { papers, allTags, allYears } from "@/data/papers";

export default function PapersPage() {
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
        <h1 className="text-4xl font-bold text-foreground">Papers</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          All publications from the LLMEval research series.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Year:</span>
          <button
            onClick={() => setSelectedYear(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedYear === null
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allYears.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(selectedYear === year ? null : year)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedYear === year
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Topic:</span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              selectedTag === null
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="mb-6 text-sm text-muted-foreground">
        Showing {filtered.length} of {papers.length} papers
      </p>

      {/* Paper grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((paper, i) => (
          <PaperCard key={paper.id} paper={paper} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No papers match the selected filters.</p>
          <button
            onClick={() => {
              setSelectedYear(null);
              setSelectedTag(null);
            }}
            className="mt-4 text-sm font-medium text-accent hover:text-accent/80"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
