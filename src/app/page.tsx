"use client";

import { Hero } from "@/components/Hero";
import { PaperCard } from "@/components/PaperCard";
import { papers } from "@/data/papers";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function HomePage() {
  const { t } = useLanguage();
  const featuredPapers = papers.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">{t("home.featured")}</h2>
            <p className="mt-2 text-muted-foreground">{t("home.featured.desc")}</p>
          </div>
          <Link
            href="/papers"
            className="hidden items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80 sm:inline-flex"
          >
            {t("home.viewAll")}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPapers.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/papers" className="text-sm font-medium text-accent">
            {t("home.viewAll")} →
          </Link>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-foreground">{t("home.cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("home.cta.desc")}</p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/llmeval"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {t("home.cta.github")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
