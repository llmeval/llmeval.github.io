import { Hero } from "@/components/Hero";
import { PaperCard } from "@/components/PaperCard";
import { papers } from "@/data/papers";
import Link from "next/link";

export default function HomePage() {
  const featuredPapers = papers.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured Papers */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Featured Research</h2>
            <p className="mt-2 text-muted-foreground">
              Our latest and most impactful publications in LLM evaluation.
            </p>
          </div>
          <Link
            href="/papers"
            className="hidden items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-accent/80 sm:inline-flex"
          >
            View all papers
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
            View all papers →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-foreground">Participate in LLMEval</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            LLMEval is open to the public. Institutional evaluation requires certification — register an account
            on our platform and contact the administrators for verification and evaluation permissions.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="http://llmeval.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Apply for Evaluation
            </a>
            <a
              href="https://github.com/llmeval"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-card px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
