export interface Paper {
  id: string;
  title: string;
  titleZh?: string;
  authors: string[];
  authorNotes?: string;
  venue: string;
  year: number;
  abstract: string;
  abstractZh?: string;
  arxiv?: string;
  pdf?: string;
  github?: string;
  project?: string;
  huggingface?: string;
  doi?: string;
  stars?: number;
  tags: string[];
  featured?: boolean;
  relatedRepos?: { name: string; url: string; description: string; stars?: number }[];
}

export const papers: Paper[] = [
  {
    id: "llmeval-fair",
    title:
      "LLMEval-Fair: A Large-Scale Longitudinal Study on Robust and Fair Evaluation of Large Language Models",
    titleZh: "LLMEval-Fair：大语言模型鲁棒公平评测的大规模纵向研究",
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
    abstractZh: "LLMEval-Fair 通过30个月的纵向研究解决大语言模型评测中的鲁棒性和公平性问题。基于22万道研究生级别题目的私有题库，覆盖13个学科门类，每次评测动态抽取未见过的测试集。其自动化流水线通过抗污染数据策划、新型反作弊架构和校准的LLM-as-a-judge流程（与人类专家90%一致率）确保评测完整性。对近60个领先模型的研究揭示了性能天花板效应，并暴露了静态基准无法检测的数据污染漏洞。",
    abstract:
      "LLMEval-Fair addresses robustness and fairness concerns in LLM evaluation through a 30-month longitudinal study. Built on a proprietary bank of 220,000 graduate-level questions across 13 academic disciplines, it dynamically samples unseen test sets for each evaluation run. Its automated pipeline ensures integrity via contamination-resistant data curation, a novel anti-cheating architecture, and a calibrated LLM-as-a-judge process achieving 90% agreement with human experts. A study of nearly 60 leading models reveals performance ceilings and exposes data contamination vulnerabilities undetectable by static benchmarks.",
    arxiv: "https://arxiv.org/abs/2508.05452",
    github: "https://github.com/llmeval/LLMEval-Fair",
    stars: 37,
    project: "http://llmeval.com/",
    tags: ["evaluation", "fairness", "robustness", "generative QA", "longitudinal study"],
    featured: true,
  },
  {
    id: "llmeval-med",
    title:
      "LLMEval-Med: A Real-world Clinical Benchmark for Medical LLMs with Physician Validation",
    titleZh: "LLMEval-Med：基于真实临床场景、医生验证的医学大模型评测基准",
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
    abstractZh: "LLMEval-Med 提出一个全面的、经医生验证的基准，用于评估大语言模型在真实临床任务上的表现。涵盖五个核心医学领域（医学知识、医学语言理解、医学推理、医学伦理与安全、医学文本生成），包含2,996道来自真实电子病历和专家设计临床场景的题目。引入结合专家清单的LLM-as-Judge自动评测流水线，通过人机一致性分析验证。评测了13个大模型。",
    abstract:
      "LLMEval-Med is a physician-validated benchmark for evaluating LLMs on real-world clinical tasks. It covers five core medical areas (Medical Knowledge, Language Understanding, Reasoning, Ethics & Safety, Text Generation) with 2,996 questions from real electronic health records and expert-designed clinical scenarios. An automated evaluation pipeline with expert-developed checklists is validated through human-machine agreement analysis. 13 LLMs across specialized, open-source, and closed-source categories are evaluated.",
    arxiv: "https://arxiv.org/abs/2506.04078",
    github: "https://github.com/llmeval/LLMEval-Med",
    stars: 25,
    huggingface: "https://huggingface.co/datasets/HuayuSha/LLMeval-Med",
    tags: ["medical", "clinical", "physician validation", "LLM-as-Judge"],
    featured: true,
  },
  {
    id: "llmeval",
    title: "LLMEval: A Preliminary Study on How to Evaluate Large Language Models",
    titleZh: "LLMEval：如何评测大语言模型的初步研究",
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
    abstractZh: "本文聚焦大语言模型评测的第三个关键问题「如何评测」，通过对比人工和自动评测中的多种评价标准、评估者类型、评分方法和排序系统。利用现场专家、众包标注员、公众志愿者和GPT-4评测了20个大模型。共2,186人参与，生成243,337条人工标注和57,511条自动评测结果。论文提出LLMEval数据集（包含两期评测数据）并得出10条结论。",
    abstract:
      "This paper tackles the third crucial question in LLM evaluation: how to evaluate. We compare various criteria with both manual and automatic evaluation, utilizing onsite staff, crowd-sourcing workers, public annotators, and GPT-4 across different scoring and ranking systems. 20 LLMs are evaluated with 2,186 participants generating 243,337 manual annotations and 57,511 automated results. The paper proposes the LLMEval dataset (from LLMEval-1 and LLMEval-2 rounds) and draws 10 conclusions for future evaluation practices.",
    arxiv: "https://arxiv.org/abs/2312.07398",
    doi: "https://doi.org/10.1609/aaai.v38i17.29934",
    tags: ["evaluation methodology", "crowdsourcing", "annotation", "scoring", "ranking"],
    featured: true,
    relatedRepos: [
      {
        name: "LLMEval-1",
        url: "https://github.com/llmeval/LLMEval-1",
        stars: 113,
        description: "Phase I dataset: 17 categories, 453 questions, 2,186 annotators for Chinese LLM evaluation",
      },
      {
        name: "LLMEval-2",
        url: "https://github.com/llmeval/LLMEval-2",
        stars: 71,
        description: "Phase II dataset: professional domain evaluation across 12 academic disciplines, 480 questions",
      },
    ],
  },
  {
    id: "llmeval-gaokao2024-math",
    title: "LLMEval-Gaokao2024-Math: 中文大语言模型评测 2024 高考数学专题",
    titleZh: "LLMEval-高考2024数学：中文大语言模型评测高考数学专题",
    authors: ["LLMEval Team"],
    venue: "Technical Report",
    year: 2024,
    abstractZh: "本评测利用2024年高考数学真题作为大语言模型的评测基准。全新出炉的高考试题具备高度独创性和保密性，是评测大模型的绝好测试集。评测覆盖新I卷和新II卷，采用LaTeX格式和转义符格式两种Prompt，揭示模型在数学场景下对输入格式的敏感度。",
    abstract:
      "This evaluation utilizes the 2024 Chinese National College Entrance Examination (Gaokao) mathematics papers as a benchmark for large language models. Fresh exam questions with high originality and confidentiality make them an excellent test set. The evaluation covers both New Paper I and New Paper II, testing models with both LaTeX and escape-character formatted prompts to reveal sensitivity to prompt formatting in mathematical contexts.",
    github: "https://github.com/llmeval/Llmeval-Gaokao2024-Math",
    stars: 19,
    tags: ["mathematics", "Gaokao", "prompt format"],
    featured: false,
  },
];

export const allTags = Array.from(new Set(papers.flatMap((p) => p.tags))).sort();
export const allYears = Array.from(new Set(papers.map((p) => p.year))).sort((a, b) => b - a);
