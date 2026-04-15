import type { Metadata } from "next";
import { LeaderboardTable } from "@/components/LeaderboardTable";

export const metadata: Metadata = {
  title: "Leaderboard",
  description: "Model rankings across LLMEval benchmarks — sortable and filterable.",
};

export default function LeaderboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">Leaderboard</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Model performance rankings across LLMEval evaluation benchmarks.
        </p>
      </div>

      <LeaderboardTable />

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">About the Evaluation (LLMEval-Fair)</h2>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Models are evaluated across 13 academic disciplines with approximately 200,000 standardized
          generative question-answering items. Each model completes 1,000 randomly sampled questions.
          The <strong className="text-foreground">absolute score</strong> (0–100) represents raw performance,
          while the <strong className="text-foreground">relative score</strong> measures the gap to the current
          SOTA model. Discipline scores use a 10-point scale. All evaluations use GPT-4 Turbo as the judge
          with a 0–3 point rubric per question.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Want to submit your model for evaluation? Register at{" "}
          <a
            href="http://llmeval.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:text-accent/80"
          >
            llmeval.com
          </a>{" "}
          or contact us at{" "}
          <a href="mailto:mingzhang23@m.fudan.edu.cn" className="font-medium text-accent hover:text-accent/80">
            mingzhang23@m.fudan.edu.cn
          </a>
          .
        </p>
      </div>
    </div>
  );
}
