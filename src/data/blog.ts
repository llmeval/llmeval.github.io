export interface BlogPost {
  slug: string;
  title: string;
  titleZh?: string;
  date: string;
  excerpt: string;
  excerptZh?: string;
  tags: string[];
  author: string;
  content: string;
  contentZh?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "llmeval-logic-public-release",
    title: "LLMEval-Logic: Solver-Verified Chinese Logic Reasoning Benchmark (80% Public Release)",
    titleZh: "LLMEval-Logic：经求解器验证的中文逻辑推理评测基准（公开 80%）",
    date: "2026-05-12",
    excerptZh: "LLMEval-Logic 是一个用 Z3 求解器和人工 rubric 双重审计、并经过对抗强化的中文逻辑推理评测基准。本次开源 80% 题目（197 Base + 152 Hard + 197 rubric），剩余 20% 由复旦 NLP 实验室自留为私有抗污染测试集。",
    excerpt:
      "LLMEval-Logic is a Chinese logical reasoning benchmark double-audited by the Z3 SMT solver and human rubrics, and toughened via an adversarial-hardening agent loop. We are releasing 80% of the items (197 Base + 152 Hard + 197 rubrics); the remaining 20% is held out as a private contamination-resistant test set maintained by Fudan NLP Lab.",
    tags: ["LLMEval-Logic", "logical reasoning", "Z3", "contamination-resistant"],
    author: "LLMEval Team",
    content: `
# LLMEval-Logic: A Solver-Verified Chinese Benchmark for Logical Reasoning of LLMs with Adversarial Hardening

We are releasing **LLMEval-Logic**, the logic-reasoning entry in the LLMEval series. The benchmark was built through a three-stage audit pipeline and is published in two paired splits — a Z3-verified single-question split and a multi-question adversarially hardened split.

## Why another logic benchmark?

Existing logical reasoning benchmarks tend to fall into one of two failure modes:

1. **Template-leak.** Items are generated forward from formulas, so models that memorise the templates do well on the test set but generalise poorly to natural text.
2. **Easy-answer drift.** Once a model can pattern-match a few answer keywords, the benchmark stops differentiating frontier reasoners.

LLMEval-Logic is designed to attack both failure modes.

## Three-stage audit pipeline

**Stage (a) — forward authoring.** Annotators write items *forward* from real-world situations (e.g. roommate scheduling, project sign-off, library borrowing) rather than templating *backward* from formulas. Each item carries Chinese natural-language premises and a question.

**Stage (b) — solver + rubric double audit.** For every Base item we ship a gold formalisation (parameters / premise / question in a solver-parseable JSON schema). The translation is double-checked by:
- **Z3 SMT solver** running three judgments (\`possible / necessary / enumerate_models\`).
- **A hand-written atom-level rubric** organised into \`logical_relation\` / \`stated_constraint\` / \`query_alignment\` groups, so we can score whether a candidate FL preserves the original logical relations, constraints, and query — not just whether the final answer happens to match.

**Stage (c) — closed-loop adversarial hardening.** A five-role agent workflow (Decider / Proposal / Review / Answering / Verification) rewrites high-accuracy Base items into harder multi-question variants under six structured strategies (branching, effective distractors, explicit uncertainty, set-valued output, counterfactual variants, alias/coreference shifts). A rewrite is admitted only when it passes both Review and Verification, producing the Hard split.

## What's in the public release

- **LLMEval-Logic-Base** — 197 single-question items (PL + FOL) with Z3-verified answers, gold formalisations, and atom-level rubrics.
- **LLMEval-Logic-Hard** — 152 multi-question items (~752 sub-questions) covering closed-world enumeration / counting / uniqueness / alternative-solution / counterfactual reasoning.
- **Rubrics** — 197 per-problem checklists (one per Base item), each containing atomic yes/no statements that can be answered jointly by Z3 and an LLM judge.

The public 80% is produced by deterministic stratified sampling with \`seed=2026\` — Base is stratified by \`(logictype, label_type)\`, Hard by sub-question-count bucket — so the public split preserves the full corpus's distribution and the public numbers stay comparable with the paper's full-corpus numbers.

| | Full corpus | Public (this release) | Private holdout |
|---|---:|---:|---:|
| LLMEval-Logic-Base items | 246 | **197** | 49 |
| LLMEval-Logic-Hard items | 190 | **152** | 38 |
| Hard sub-questions | 938 | ~752 | ~186 |
| Per-problem rubric files | 246 | **197** | 49 |

## Headline numbers (paper, full corpus)

Three independent runs of **14 frontier LLMs** under thinking / no-thinking configurations:

| Model | Base Item Acc. | Hard Item Acc. | Hard Sub-Q Acc. |
|---|---:|---:|---:|
| **Gemini 3.1 Pro** (thinking) | 74.0 ± 1.2 | **37.5 ± 3.8** | 76.0 ± 0.6 |
| Claude Opus 4.6 (thinking) | 68.7 ± 3.2 | 36.7 ± 2.6 | 76.6 ± 1.4 |
| Claude Opus 4.6 (no-think) | 69.0 ± 1.2 | 36.0 ± 2.4 | 74.4 ± 1.2 |
| GPT-5.4 Pro (thinking) | 71.8 ± 0.9 | 32.6 ± 4.3 | 68.4 ± 3.1 |

Even with the strongest reasoner, **Hard Item Accuracy tops out at 37.5%** — there is plenty of room left for frontier reasoning research.

## Why a 20% private holdout?

Following the contamination-resistant tradition of [LLMEval-Fair](/papers#llmeval-fair), we hold out 49 Base + 38 Hard items (and their rubrics) as a private contamination-resistant test set maintained by Fudan NLP Lab. The holdout backs the official **LLMEval-Logic leaderboard** at [llmeval.com](https://llmeval.com/) and supports contamination audits years after the public release.

To submit a model for official evaluation against the holdout, please contact <mingzhang23@m.fudan.edu.cn>.

- **Code & one-command pipeline**: <https://github.com/llmeval/LLMEval-Logic>
- **Public 80% dataset**: <https://huggingface.co/datasets/llmeval-fdu/LLMEval-Logic>
    `.trim(),
  },
  {
    slug: "llmeval-fair-accepted-acl2026",
    title: "LLMEval-Fair Accepted to ACL 2026 Main Conference",
    titleZh: "LLMEval-Fair 被 ACL 2026 主会录用",
    date: "2026-04-10",
    excerptZh: "我们的鲁棒公平评测论文被 ACL 2026 主会录用。基于22万生成式题目、13个学科和反作弊机制，LLMEval-Fair 为可信模型评测树立新标准。",
    excerpt:
      "Our paper on robust and fair LLM evaluation has been accepted to ACL 2026. With 220K generative questions across 13 disciplines and anti-cheating mechanisms, LLMEval-Fair sets a new standard for trustworthy model benchmarking.",
    tags: ["ACL 2026", "LLMEval-Fair"],
    author: "LLMEval Team",
    content: `
# LLMEval-Fair Accepted to ACL 2026 Main Conference

We are thrilled to announce that **"LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models"** has been accepted to the **main conference of ACL 2026**.

## Why LLMEval-Fair?

Existing LLM benchmarks face a fundamental challenge: **test set leakage**. Public benchmarks are easily scraped during pre-training, enabling "leaderboard hacking" and inflated scores that do not reflect true model capability. LLMEval-Fair tackles this head-on with multiple innovations.

## Core Design

### Anti-Cheating Mechanisms
- **Non-public question sources** — Questions sourced from non-public channels (undergraduate homework, mid-term/final exams, graduate entrance exams in PDF/Word format) to minimize pre-training contamination
- **Random sampling** — Each model completes 1,000 questions randomly sampled from a proprietary bank of 220,000
- **Non-repeating evaluations** — Models from the same institution receive different question sets across evaluations
- **Sequential online delivery** — Questions sent one-at-a-time, preventing bulk crawling

### Generative QA Format
Unlike the multiple-choice format used by most benchmarks, LLMEval-Fair uses **generative question-answering** exclusively. This includes short answer, calculation, true/false, analysis, and essay questions — far better reflecting real-world user interactions with LLMs.

### Dual Scoring System
- **Absolute Score** (0–100): Raw model performance across 1,000 questions, normalized from a 0–3 per-question rubric
- **Relative Score**: Performance relative to the current SOTA model (Doubao-1.5-Thinking-Pro as the 100% baseline)

## Scope

The benchmark covers **13 academic disciplines** as defined by the Ministry of Education: Philosophy, Economics, Law, Education, Literature, History, Science, Engineering, Agriculture, Medicine, Military Science, Management, and Arts — with 50+ sub-disciplines.

## Current Leaderboard

As of December 2025, **nearly 60 models** have been evaluated from major organizations including OpenAI, Google, Anthropic, DeepSeek, ByteDance, Alibaba, Zhipu AI, Moonshot AI, and more. See the full rankings on our [Leaderboard](/leaderboard) page.

- **Paper**: [arXiv:2508.05452](https://arxiv.org/abs/2508.05452)
- **Code & Data**: [GitHub](https://github.com/llmeval/LLMEval-Fair)
- **Evaluation Platform**: [llmeval.com](https://llmeval.com/)
    `.trim(),
  },
  {
    slug: "llmeval-med-emnlp2025",
    title: "LLMEval-Med: Physician-Validated Clinical Benchmark (EMNLP 2025)",
    titleZh: "LLMEval-Med：经医生验证的临床基准（EMNLP 2025）",
    date: "2025-11-01",
    excerptZh: "LLMEval-Med 提出2,996道基于真实电子病历的临床题目，经医生验证，覆盖五个核心医学维度的评测基准。",
    excerpt:
      "LLMEval-Med introduces a benchmark of 2,996 clinical questions built from real electronic health records, with physician-validated evaluation covering five core medical dimensions.",
    tags: ["EMNLP 2025", "LLMEval-Med", "medical AI"],
    author: "LLMEval Team",
    content: `
# LLMEval-Med: A Real-world Clinical Benchmark (EMNLP 2025 Findings)

**LLMEval-Med** has been accepted at **EMNLP 2025 Findings**. This work addresses critical gaps in medical LLM evaluation by building a benchmark grounded in real clinical practice rather than exam-style questions.

## Motivation

Current medical LLM benchmarks have three key limitations:
- **Question design** — mostly multiple-choice, which poorly tests clinical reasoning
- **Data sources** — often not derived from real clinical scenarios
- **Evaluation methods** — inadequate assessment of complex medical reasoning

LLMEval-Med addresses all three.

## Benchmark Design

### Five Core Medical Areas
1. **Medical Knowledge** — factual recall and understanding of medical concepts
2. **Medical Language Understanding** — comprehension of clinical text, reports, and records
3. **Medical Reasoning** — diagnostic reasoning, differential diagnosis, treatment planning
4. **Medical Ethics and Safety** — ethical decision-making and harm avoidance
5. **Medical Text Generation** — clinical note writing, patient communication, report generation

### Real-World Clinical Data
- **2,996 questions** created from real-world electronic health records and expert-designed clinical scenarios
- Questions span multiple difficulty levels and clinical specialties

## Evaluation Innovation

### LLM-as-Judge with Physician Validation
Rather than simple answer matching, LLMEval-Med uses an **automated evaluation pipeline** with:
- **Expert-developed checklists** incorporated into the LLM-as-Judge framework
- **Human-machine agreement analysis** to validate scoring reliability
- **Dynamic refinement** of checklists and prompts based on ongoing expert feedback
- **5-point scoring rubric** from Unacceptable (1) to Accuracy (5)

## Key Results

13 LLMs were evaluated across three categories:
- **Specialized medical models** — fine-tuned for healthcare
- **Open-source models** — general-purpose open weights
- **Closed-source models** — proprietary API-based systems

The evaluation reveals important insights about when and how LLMs can be safely deployed in clinical settings.

- **Paper**: [arXiv:2506.04078](https://arxiv.org/abs/2506.04078)
- **Dataset**: [HuggingFace](https://huggingface.co/datasets/llmeval-fdu/LLMEval-Med)
- **Code**: [GitHub](https://github.com/llmeval/LLMEval-Med)
    `.trim(),
  },
  {
    slug: "llmeval-aaai2024",
    title: "LLMEval: How to Evaluate Large Language Models (AAAI 2024)",
    titleZh: "LLMEval：如何评测大语言模型（AAAI 2024）",
    date: "2024-03-24",
    excerptZh: "AAAI 2024 基础方法论论文，系统研究「如何评测」问题——对比评价标准、标注者类型、评分方法和排序系统，2,186人参与评测20个模型。",
    excerpt:
      "Our foundational paper at AAAI 2024 systematically studies the 'how to evaluate' question — comparing evaluation criteria, annotator types, scoring methods, and ranking systems across 20 LLMs with 2,186 participants.",
    tags: ["AAAI 2024", "LLMEval", "methodology"],
    author: "LLMEval Team",
    content: `
# LLMEval: A Preliminary Study on How to Evaluate Large Language Models (AAAI 2024)

Published at **AAAI 2024**, this paper is the foundational work of the LLMEval series. While most evaluation research focuses on *what* tasks and *what* knowledge to test, this paper systematically addresses the often-overlooked third question: **how to evaluate**.

## The Three Questions of LLM Evaluation

1. **What to evaluate?** — What tasks should LLMs be tested on?
2. **Where to evaluate?** — What domains and knowledge areas?
3. **How to evaluate?** — What standards, evaluators, scoring methods, and ranking systems?

This paper focuses squarely on question 3.

## Methodology

We designed a comprehensive experimental framework comparing:

### Evaluation Criteria
- Five assessment dimensions: **Correctness, Fluency, Informativeness, Logic, and Harmlessness**
- Item-based scoring vs. pairwise comparison

### Annotator Types
- **Onsite staff** — trained professional annotators
- **Crowd-sourcing workers** — paid task workers
- **Public annotators** — volunteer participants (2,186 individuals)
- **GPT-4** — automated evaluation baseline

### Scoring and Ranking Methods
- Absolute scoring vs. relative comparison
- Different aggregation and ranking algorithms

## The LLMEval Dataset

The paper introduces the **LLMEval dataset**, collected through two major evaluation rounds:

### LLMEval-1 (第一期)
- **17 major categories**, 453 questions
- Covers: factual QA, reading comprehension, framework generation, paragraph rewriting, summarization, mathematical problem-solving, reasoning, poetry generation, programming, and more
- 2,186 public participants, 243,337 manual annotations

### LLMEval-2 (第二期)
- **12 academic disciplines**, 480 questions
- Professional domain evaluation with both objective and subjective questions
- Focus on tasks where students seek LLM assistance in their studies
- 57,511 GPT-4 automated evaluations

## 10 Key Conclusions

The paper draws 10 empirically-grounded conclusions about LLM evaluation methodology, covering:
- Agreement between human and automated evaluators
- Impact of criteria selection on model rankings
- Reliability of different annotator types
- Trade-offs between scoring approaches

These findings laid the groundwork for LLMEval-Fair and LLMEval-Med.

- **Paper**: [arXiv:2312.07398](https://arxiv.org/abs/2312.07398)
- **AAAI Proceedings**: [DOI:10.1609/aaai.v38i17.29934](https://doi.org/10.1609/aaai.v38i17.29934)
- **LLMEval-1 Data**: [GitHub](https://github.com/llmeval/LLMEval-1)
- **LLMEval-2 Data**: [GitHub](https://github.com/llmeval/LLMEval-2)
    `.trim(),
  },
  {
    slug: "gaokao-2024-math-evaluation",
    title: "2024 Gaokao Math: LLM Evaluation Special Report",
    titleZh: "2024高考数学：大语言模型评测专题报告",
    date: "2024-06-14",
    excerptZh: "利用全新出炉的2024年高考数学真题——高度独创且保密——采用LaTeX和转义符两种Prompt格式评测主流大模型。",
    excerpt:
      "Using the freshly released 2024 Chinese Gaokao math papers — highly original and confidential — we evaluate leading LLMs with both LaTeX and escape-character prompts.",
    tags: ["Gaokao", "mathematics"],
    author: "LLMEval Team",
    content: `
# 2024 Gaokao Math: LLM Evaluation Special Report

The 2024 Chinese National College Entrance Examination (高考) math papers offer a unique opportunity for LLM evaluation. Their **high originality** and **strict confidentiality** mean that models cannot have seen these exact questions during pre-training, making them an exceptionally fair test set.

## Why Gaokao Math?

- **Zero contamination risk** — brand-new questions released under strict security
- **Standardized difficulty** — designed by professional exam committees
- **Comprehensive coverage** — tests algebra, geometry, probability, calculus, and logical reasoning
- **National significance** — taken by millions of students, with well-established scoring rubrics

## Evaluation Design

We evaluated leading LLMs on both **New Paper I (新I卷)** and **New Paper II (新II卷)**, using two different prompt formats:

### LaTeX Format
Mathematical expressions rendered in standard LaTeX notation (e.g., \\(\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1\\)).

### Escape Character Format
Mathematical expressions using text-based representations with escape characters.

This dual-format design reveals how sensitive models are to prompt formatting — an often-overlooked factor in mathematical evaluation.

## Key Findings

- Model performance varies significantly between the two prompt formats
- Some models show strong LaTeX comprehension but struggle with text-based math notation (and vice versa)
- The results highlight the importance of **standardized input formatting** for fair mathematical evaluation

Detailed results and leaderboard rankings are available in our [GitHub repository](https://github.com/llmeval/Llmeval-Gaokao2024-Math).
    `.trim(),
  },
];
