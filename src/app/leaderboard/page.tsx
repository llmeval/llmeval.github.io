"use client";

import { useState } from "react";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { Eval1Table } from "@/components/Eval1Table";
import { Eval2Table } from "@/components/Eval2Table";
import { MedTable } from "@/components/MedTable";

const tabs = [
  {
    id: "fair",
    label: "LLMEval-Fair",
    badge: "ACL 2026",
    description: "220K generative questions across 13 academic disciplines. Nearly 60 models evaluated over a 30-month longitudinal study.",
  },
  {
    id: "med",
    label: "LLMEval-Med",
    badge: "EMNLP 2025",
    description: "2,996 physician-validated clinical questions across 5 medical dimensions. 13 models evaluated (open-source, closed-source, specialized).",
  },
  {
    id: "eval1",
    label: "LLMEval-1",
    badge: "AAAI 2024",
    description: "Phase I general evaluation — 17 categories, 453 questions. 2,186 annotators + GPT-4 automated scoring.",
  },
  {
    id: "eval2",
    label: "LLMEval-2",
    badge: "AAAI 2024",
    description: "Phase II professional domain evaluation — 12 academic disciplines, 480 questions (objective + subjective).",
  },
] as const;

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState<string>("fair");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">Leaderboard</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Model performance rankings across all LLMEval benchmarks.
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-accent text-accent-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10px] font-semibold ${
                activeTab === tab.id
                  ? "bg-accent-foreground/20 text-accent-foreground"
                  : "bg-border text-muted-foreground"
              }`}
            >
              {tab.badge}
            </span>
          </button>
        ))}
      </div>

      {/* Tab description */}
      <p className="mb-6 text-sm text-muted-foreground">
        {tabs.find((t) => t.id === activeTab)?.description}
      </p>

      {/* Tab content */}
      {activeTab === "fair" && <LeaderboardTable />}
      {activeTab === "med" && <MedTable />}
      {activeTab === "eval1" && <Eval1Table />}
      {activeTab === "eval2" && <Eval2Table />}

      {/* About section */}
      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">About the Evaluations</h2>
        <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">LLMEval-Fair</strong> (ACL 2026) — Models are evaluated across 13 academic disciplines
            with a proprietary bank of 220,000 graduate-level generative questions. Each model completes 1,000 randomly sampled questions.
            Absolute score (0–100) represents raw performance; relative score measures the gap to the current SOTA model.
            Discipline scores use a 10-point scale. All evaluations use GPT-4 Turbo as the judge with a 0–3 point rubric per question.
          </p>
          <p>
            <strong className="text-foreground">LLMEval-Med</strong> (EMNLP 2025) — 2,996 questions from real-world electronic health records
            and expert-designed clinical scenarios across 5 dimensions: Medical Knowledge (MK), Medical Language Understanding (MLU),
            Medical Reasoning (MR), Medical Safety & Ethics (MSE), and Medical Text Generation (MTG).
            Scores represent usability rates (%) — the proportion of responses scoring 4+ on a 0–5 scale (automated) or 5+ on a 0–7 scale (MTG, human-evaluated).
            Human-machine agreement rate: 92.36%.
          </p>
          <p>
            <strong className="text-foreground">LLMEval-1</strong> (AAAI 2024) — 17 categories, 453 questions evaluated on five dimensions:
            correctness, fluency, informativeness, logic, and harmlessness (0–3 scale). 2,186 public annotators contributed 243,337 annotations.
            Pairwise comparison scores (0–1) are also provided.
          </p>
          <p>
            <strong className="text-foreground">LLMEval-2</strong> (AAAI 2024) — 12 academic disciplines, 480 questions split between
            objective (max 5 points) and subjective (max 14 points) questions. Total scores normalized to 0–100 scale.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Want to submit your model for evaluation? Register at{" "}
          <a href="http://llmeval.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent/80">
            llmeval.com
          </a>{" "}
          or contact us at{" "}
          <a href="mailto:mingzhang23@m.fudan.edu.cn" className="font-medium text-accent hover:text-accent/80">
            mingzhang23@m.fudan.edu.cn
          </a>.
        </p>
      </div>
    </div>
  );
}
