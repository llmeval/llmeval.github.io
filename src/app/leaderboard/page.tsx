"use client";

import { useState } from "react";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { Eval1Table } from "@/components/Eval1Table";
import { Eval2Table } from "@/components/Eval2Table";
import { MedTable } from "@/components/MedTable";
import { useLanguage } from "@/lib/i18n";
import type { DictKey } from "@/lib/dict";

const tabs: { id: string; label: string; badge: string; descKey: DictKey }[] = [
  { id: "fair", label: "LLMEval-Fair", badge: "ACL 2026", descKey: "lb.fair.desc" },
  { id: "med", label: "LLMEval-Med", badge: "EMNLP 2025", descKey: "lb.med.desc" },
  { id: "eval1", label: "LLMEval-1", badge: "AAAI 2024", descKey: "lb.eval1.desc" },
  { id: "eval2", label: "LLMEval-2", badge: "AAAI 2024", descKey: "lb.eval2.desc" },
];

export default function LeaderboardPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("fair");

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">{t("lb.title")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{t("lb.desc")}</p>
      </div>

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

      <p className="mb-6 text-sm text-muted-foreground">
        {t(tabs.find((tb) => tb.id === activeTab)!.descKey)}
      </p>

      {activeTab === "fair" && <LeaderboardTable />}
      {activeTab === "med" && <MedTable />}
      {activeTab === "eval1" && <Eval1Table />}
      {activeTab === "eval2" && <Eval2Table />}

      <div className="mt-12 rounded-xl border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground">{t("lb.about")}</h2>
        <div className="mt-3 space-y-3 text-sm text-muted-foreground leading-relaxed">
          <p><strong className="text-foreground">LLMEval-Fair</strong> — {t("lb.about.fair")}</p>
          <p><strong className="text-foreground">LLMEval-Med</strong> — {t("lb.about.med")}</p>
          <p><strong className="text-foreground">LLMEval-1</strong> — {t("lb.about.eval1")}</p>
          <p><strong className="text-foreground">LLMEval-2</strong> — {t("lb.about.eval2")}</p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {t("lb.submit")}{" "}
          <a href="http://llmeval.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent/80">
            llmeval.com
          </a>{" "}
          {t("lb.or")}{" "}
          <a href="mailto:mingzhang23@m.fudan.edu.cn" className="font-medium text-accent hover:text-accent/80">
            mingzhang23@m.fudan.edu.cn
          </a>.
        </p>
      </div>
    </div>
  );
}
