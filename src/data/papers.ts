export interface Paper {
  id: string;
  title: string;
  authors: string[];
  authorNotes?: string;
  venue: string;
  year: number;
  abstract: string;
  arxiv?: string;
  pdf?: string;
  github?: string;
  project?: string;
  huggingface?: string;
  doi?: string;
  tags: string[];
  featured?: boolean;
  relatedRepos?: { name: string; url: string; description: string }[];
}

export const papers: Paper[] = [
  {
    id: "llmeval-fair",
    title:
      "LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models",
    authors: [
      "Ming Zhang*†",
      "Yujiong Shen*",
      "Jingyi Deng*",
      "Yuhui Wang*",
      "Huayu Sha",
      "Kexin Tan",
      "Qiyuan Peng",
      "Yue Zhang",
      "Junzhe Wang",
      "Shichun Liu",
      "Yueyuan Huang",
      "Jingqi Tong",
      "Changhao Jiang",
      "Yilong Wu",
      "Zhihao Zhang",
      "Mingqi Wu",
      "Mingxu Chai",
      "Zhiheng Xi",
      "Shihan Dou",
      "Tao Gui",
      "Qi Zhang†",
      "Xuanjing Huang",
    ],
    authorNotes: "* Equal Contribution, † Corresponding Author",
    venue: "ACL 2026 Main Conference",
    year: 2026,
    abstract:
      "LLMEval-Fair addresses robustness and fairness concerns in LLM evaluation through a 30-month longitudinal study. Built on a proprietary bank of 220,000 graduate-level questions across 13 academic disciplines, it dynamically samples unseen test sets for each evaluation run. Its automated pipeline ensures integrity via contamination-resistant data curation, a novel anti-cheating architecture, and a calibrated LLM-as-a-judge process achieving 90% agreement with human experts. A study of nearly 60 leading models reveals performance ceilings and exposes data contamination vulnerabilities undetectable by static benchmarks.",
    arxiv: "https://arxiv.org/abs/2508.05452",
    github: "https://github.com/llmeval/LLMEval-Fair",
    project: "http://llmeval.com/",
    tags: ["evaluation", "fairness", "robustness", "generative QA", "longitudinal study"],
    featured: true,
  },
  {
    id: "llmeval-med",
    title:
      "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation",
    authors: [
      "Ming Zhang*",
      "Yujiong Shen*",
      "Zelin Li*",
      "Huayu Sha",
      "Binze Hu",
      "Yuhui Wang",
      "Chenhao Huang",
      "Shichun Liu",
      "Jingqi Tong",
      "Changhao Jiang",
      "Mingxu Chai",
      "Zhiheng Xi",
      "Shihan Dou",
      "Tao Gui",
      "Qi Zhang†",
      "Xuanjing Huang†",
    ],
    authorNotes: "* Equal Contribution, † Corresponding Author",
    venue: "EMNLP 2025 Findings",
    year: 2025,
    abstract:
      "LLMEval-Med presents a comprehensive, physician-validated benchmark for evaluating LLMs on real-world clinical tasks. It covers five core medical areas — Medical Knowledge, Medical Language Understanding, Medical Reasoning, Medical Ethics and Safety, and Medical Text Generation — with 2,996 questions created from real-world electronic health records and expert-designed clinical scenarios. The work introduces an automated evaluation pipeline incorporating expert-developed checklists into an LLM-as-Judge framework, validated through human-machine agreement analysis. 13 LLMs across three categories (specialized medical, open-source, and closed-source) are evaluated.",
    arxiv: "https://arxiv.org/abs/2506.04078",
    github: "https://github.com/llmeval/LLMEval-Med",
    huggingface: "https://huggingface.co/datasets/HuayuSha/LLMeval-Med",
    tags: ["medical", "clinical", "physician validation", "LLM-as-Judge"],
    featured: true,
  },
  {
    id: "llmeval",
    title: "LLMEval: A Preliminary Study on How to Evaluate Large Language Models",
    authors: [
      "Yue Zhang*",
      "Ming Zhang*",
      "Haipeng Yuan",
      "Shichun Liu",
      "Yongyao Shi",
      "Tao Gui",
      "Qi Zhang†",
      "Xuanjing Huang",
    ],
    authorNotes: "* Equal Contribution, † Corresponding Author",
    venue: "AAAI 2024",
    year: 2024,
    abstract:
      "This paper addresses the third crucial question in LLM evaluation — \"how to evaluate\" — by analyzing evaluation methods through comparing various criteria with both manual and automatic evaluation. Utilizing onsite staff, crowd-sourcing workers, public annotators, and GPT-4 with different scoring methods and ranking systems, we evaluate 20 LLMs. A total of 2,186 individuals participated, generating 243,337 manual annotations and 57,511 automatic evaluation results. The paper proposes the LLMEval dataset (comprising data from both LLMEval-1 and LLMEval-2 evaluation rounds) and draws 10 conclusions providing insights for future LLM evaluation practices.",
    arxiv: "https://arxiv.org/abs/2312.07398",
    doi: "https://doi.org/10.1609/aaai.v38i17.29934",
    tags: ["evaluation methodology", "crowdsourcing", "annotation", "scoring", "ranking"],
    featured: true,
    relatedRepos: [
      {
        name: "LLMEval-1",
        url: "https://github.com/llmeval/LLMEval-1",
        description: "Phase I dataset — 17 categories, 453 questions, 2,186 annotators for Chinese LLM evaluation",
      },
      {
        name: "LLMEval-2",
        url: "https://github.com/llmeval/LLMEval-2",
        description: "Phase II dataset — professional domain evaluation across 12 academic disciplines, 480 questions",
      },
    ],
  },
  {
    id: "llmeval-gaokao2024-math",
    title: "LLMEval-Gaokao2024-Math: 中文大语言模型评测 2024 高考数学专题",
    authors: ["LLMEval Team"],
    venue: "Technical Report",
    year: 2024,
    abstract:
      "This evaluation utilizes the 2024 Chinese National College Entrance Examination (Gaokao) mathematics papers as a benchmark for large language models. Fresh exam questions with high originality and confidentiality make them an excellent test set. The evaluation covers both New Paper I and New Paper II, testing models with both LaTeX and escape-character formatted prompts to reveal sensitivity to prompt formatting in mathematical contexts.",
    github: "https://github.com/llmeval/Llmeval-Gaokao2024-Math",
    tags: ["mathematics", "Gaokao", "prompt format"],
    featured: false,
  },
];

export const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort();
export const allYears = Array.from(new Set(papers.map((p) => p.year))).sort((a, b) => b - a);
