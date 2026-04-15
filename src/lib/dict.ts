const dict = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.papers": "Papers",
    "nav.leaderboard": "Leaderboard",
    "nav.blog": "Blog",

    // Hero
    "hero.badge": "FDU-NLP · AAAI 2024 · EMNLP 2025 · ACL 2026",
    "hero.title1": "Comprehensive Evaluation for ",
    "hero.title2": "Large Language Models",
    "hero.desc": "LLMEval is a research series by {lab} dedicated to building rigorous, fair, and comprehensive evaluation frameworks for LLMs — covering 13+ academic disciplines, medical AI, and 220,000+ generative questions.",
    "hero.lab": "Fudan NLP Lab",
    "hero.btn.papers": "Explore Papers",
    "hero.btn.leaderboard": "View Leaderboard",
    "hero.stat.projects": "Research Projects",
    "hero.stat.models": "Models Evaluated",
    "hero.stat.questions": "Evaluation Questions",
    "hero.stat.disciplines": "Academic Disciplines",

    // Home
    "home.featured": "Featured Research",
    "home.featured.desc": "Our latest and most impactful publications in LLM evaluation.",
    "home.viewAll": "View all papers",
    "home.cta.title": "Participate in LLMEval",
    "home.cta.desc": "LLMEval is open to the public. Institutional evaluation requires certification — register an account on our platform and contact the administrators for verification and evaluation permissions.",
    "home.cta.apply": "Apply for Evaluation",
    "home.cta.github": "View on GitHub",

    // Papers
    "papers.title": "Papers",
    "papers.desc": "All publications from the LLMEval research series.",
    "papers.year": "Year:",
    "papers.topic": "Topic:",
    "papers.showing": "Showing {n} of {total} papers",
    "papers.noMatch": "No papers match the selected filters.",
    "papers.clear": "Clear filters",
    "papers.relatedDatasets": "Related Datasets",

    // Leaderboard
    "lb.title": "Leaderboard",
    "lb.desc": "Model performance rankings across all LLMEval benchmarks.",
    "lb.fair.desc": "220K generative questions across 13 academic disciplines. Nearly 60 models evaluated over a 30-month longitudinal study.",
    "lb.med.desc": "2,996 physician-validated clinical questions across 5 medical dimensions. 13 models evaluated (open-source, closed-source, specialized).",
    "lb.eval1.desc": "Phase I general evaluation — 17 categories, 453 questions. 2,186 annotators + GPT-4 automated scoring.",
    "lb.eval2.desc": "Phase II professional domain evaluation — 12 academic disciplines, 480 questions (objective + subjective).",
    "lb.about": "About the Evaluations",
    "lb.about.fair": "LLMEval-Fair (ACL 2026) — Models are evaluated across 13 academic disciplines with a proprietary bank of 220,000 graduate-level generative questions. Each model completes 1,000 randomly sampled questions. Absolute score (0–100) represents raw performance; relative score measures the gap to the current SOTA model. Discipline scores use a 10-point scale. All evaluations use GPT-4 Turbo as the judge with a 0–3 point rubric per question.",
    "lb.about.med": "LLMEval-Med (EMNLP 2025) — 2,996 questions from real-world electronic health records and expert-designed clinical scenarios across 5 dimensions: Medical Knowledge (MK), Medical Language Understanding (MLU), Medical Reasoning (MR), Medical Safety & Ethics (MSE), and Medical Text Generation (MTG). Scores represent usability rates (%) — the proportion of responses scoring 4+ on a 0–5 scale (automated) or 5+ on a 0–7 scale (MTG, human-evaluated). Human-machine agreement rate: 92.36%.",
    "lb.about.eval1": "LLMEval-1 (AAAI 2024) — 17 categories, 453 questions evaluated on five dimensions: correctness, fluency, informativeness, logic, and harmlessness (0–3 scale). 2,186 public annotators contributed 243,337 annotations. Pairwise comparison scores (0–1) are also provided.",
    "lb.about.eval2": "LLMEval-2 (AAAI 2024) — 12 academic disciplines, 480 questions split between objective (max 5 points) and subjective (max 14 points) questions. Total scores normalized to 0–100 scale.",
    "lb.submit": "Want to submit your model for evaluation? Register at",
    "lb.or": "or contact us at",
    "lb.search": "Search models...",
    "lb.allTypes": "All Types",

    // Blog
    "blog.title": "Blog",
    "blog.desc": "Updates, insights, and announcements from the LLMEval team.",
    "blog.empty": "No blog posts yet. Stay tuned!",
    "blog.readMore": "Read more",
    "blog.back": "Back to Blog",

    // Footer
    "footer.desc": "Comprehensive evaluation frameworks for large language models by Fudan NLP Lab.",
    "footer.research": "Research",
    "footer.links": "Links",
    "footer.contact": "Contact",
    "footer.github": "GitHub Organization",
    "footer.platform": "LLMEval Platform",
    "footer.copyright": "LLMEval Project · Fudan NLP Lab. All rights reserved.",

    // Common
    "common.all": "All",
  },
  zh: {
    // Nav
    "nav.home": "首页",
    "nav.papers": "论文",
    "nav.leaderboard": "排行榜",
    "nav.blog": "博客",

    // Hero
    "hero.badge": "复旦NLP · AAAI 2024 · EMNLP 2025 · ACL 2026",
    "hero.title1": "大语言模型",
    "hero.title2": "综合评测体系",
    "hero.desc": "LLMEval 是{lab}推出的系列评测研究，致力于构建严谨、公平、全面的大语言模型评测框架——涵盖13+学科门类、医学AI和22万+生成式评测题目。",
    "hero.lab": "复旦大学NLP实验室",
    "hero.btn.papers": "浏览论文",
    "hero.btn.leaderboard": "查看排行榜",
    "hero.stat.projects": "研究项目",
    "hero.stat.models": "已评测模型",
    "hero.stat.questions": "评测题目",
    "hero.stat.disciplines": "学科门类",

    // Home
    "home.featured": "精选研究",
    "home.featured.desc": "我们在大语言模型评测领域的最新和最具影响力的发表成果。",
    "home.viewAll": "查看全部论文",
    "home.cta.title": "参与 LLMEval 评测",
    "home.cta.desc": "LLMEval 已向公众开放。机构评测需要进行认证，请在我们的平台注册账户，联系管理员进行认证并申请评测权限。",
    "home.cta.apply": "申请评测",
    "home.cta.github": "访问 GitHub",

    // Papers
    "papers.title": "论文",
    "papers.desc": "LLMEval 系列评测的全部发表成果。",
    "papers.year": "年份：",
    "papers.topic": "主题：",
    "papers.showing": "显示 {n} / {total} 篇论文",
    "papers.noMatch": "没有符合筛选条件的论文。",
    "papers.clear": "清除筛选",
    "papers.relatedDatasets": "关联数据集",

    // Leaderboard
    "lb.title": "排行榜",
    "lb.desc": "LLMEval 全部评测基准的模型性能排名。",
    "lb.fair.desc": "22万生成式问题，覆盖13个学科门类。历时30个月的纵向研究，评测近60个模型。",
    "lb.med.desc": "2,996道经医生验证的临床题目，覆盖5个医学维度。评测13个模型（开源/闭源/专用）。",
    "lb.eval1.desc": "第一期综合评测——17大类、453题。2,186名标注者 + GPT-4自动评分。",
    "lb.eval2.desc": "第二期专业领域评测——12个学科、480题（客观题+主观题）。",
    "lb.about": "关于评测方法",
    "lb.about.fair": "LLMEval-Fair（ACL 2026）— 基于22万道研究生级别生成式题库，覆盖13个学科门类。每个模型完成1,000道随机抽样题目。绝对分数（0-100）表示原始表现；相对分数衡量与当前SOTA模型的差距。学科分数采用10分制。所有评测使用GPT-4 Turbo作为评判，每题0-3分。",
    "lb.about.med": "LLMEval-Med（EMNLP 2025）— 2,996道来自真实电子病历和专家设计临床场景的题目，覆盖5个维度：医学知识(MK)、医学语言理解(MLU)、医学推理(MR)、医学安全与伦理(MSE)、医学文本生成(MTG)。分数为可用率(%)——自动评测4分以上(0-5量表)或人工评测5分以上(0-7量表，MTG)的比例。人机一致率：92.36%。",
    "lb.about.eval1": "LLMEval-1（AAAI 2024）— 17大类、453题，在五个维度评测：正确性、流畅性、信息量、逻辑性、无害性（0-3分）。2,186名公众标注者贡献了243,337条标注。同时提供对比评分（0-1）。",
    "lb.about.eval2": "LLMEval-2（AAAI 2024）— 12个学科、480题，分为客观题（最高5分）和主观题（最高14分）。总分归一化到0-100分。",
    "lb.submit": "想提交你的模型进行评测？请在以下平台注册",
    "lb.or": "或联系我们",
    "lb.search": "搜索模型...",
    "lb.allTypes": "全部类型",

    // Blog
    "blog.title": "博客",
    "blog.desc": "LLMEval 团队的最新动态、见解和公告。",
    "blog.empty": "暂无博文，敬请期待！",
    "blog.readMore": "阅读全文",
    "blog.back": "返回博客",

    // Footer
    "footer.desc": "复旦大学NLP实验室出品的大语言模型综合评测框架。",
    "footer.research": "研究",
    "footer.links": "链接",
    "footer.contact": "联系我们",
    "footer.github": "GitHub 组织",
    "footer.platform": "LLMEval 评测平台",
    "footer.copyright": "LLMEval 项目 · 复旦大学NLP实验室 版权所有",

    // Common
    "common.all": "全部",
  },
} as const;

export type Locale = "en" | "zh";
export type DictKey = keyof (typeof dict)["en"];
export default dict;
