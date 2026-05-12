# LLMEval Official Website

Official website for the **LLMEval** research series by [Fudan NLP Lab](https://github.com/llmeval). The site collects papers, datasets, leaderboards, and short project notes for the LLMEval benchmark family.

## Publications

| Paper | Venue | GitHub | Data |
|-------|-------|--------|------|
| [LLMEval-Logic](https://github.com/llmeval/LLMEval-Logic) | Under submission | [LLMEval-Logic](https://github.com/llmeval/LLMEval-Logic) | [HF](https://huggingface.co/datasets/llmeval-fdu/LLMEval-Logic) |
| [LLMEval-Fair](https://arxiv.org/abs/2508.05452) | **ACL 2026** Main | [LLMEval-Fair](https://github.com/llmeval/LLMEval-Fair) | [HF](https://huggingface.co/datasets/llmeval-fdu/LLMEval-Fair) |
| [LLMEval-Med](https://arxiv.org/abs/2506.04078) | **EMNLP 2025** Findings | [LLMEval-Med](https://github.com/llmeval/LLMEval-Med) | [HF](https://huggingface.co/datasets/llmeval-fdu/LLMEval-Med) |
| [LLMEval](https://arxiv.org/abs/2312.07398) | **AAAI 2024** | [LLMEval-1](https://github.com/llmeval/LLMEval-1) · [LLMEval-2](https://github.com/llmeval/LLMEval-2) | [HF-1](https://huggingface.co/datasets/llmeval-fdu/LLMEval-1) · [HF-2](https://huggingface.co/datasets/llmeval-fdu/LLMEval-2) |
| LLMEval-Gaokao2024-Math | Technical Report | [Llmeval-Gaokao2024-Math](https://github.com/llmeval/Llmeval-Gaokao2024-Math) | - |

## Tech Stack

- **Next.js 16** (App Router, Static Export)
- **Tailwind CSS v4** + **Geist Font**
- **TypeScript**
- **@tanstack/react-table** — interactive leaderboard with sorting/filtering
- **Framer Motion** — smooth animations
- **next-themes** — dark/light mode

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/              # Pages (Home, Papers, Leaderboard, Blog)
  components/       # Reusable UI components
  data/
    papers.ts       # Paper metadata (title, authors, venues, links)
    leaderboard.ts  # LLMEval-Fair leaderboard (30 models, 10 disciplines)
    blog.ts         # Blog posts with paper summaries
```

## Updating Content

**Papers** — Edit `src/data/papers.ts`, add entries to the `papers` array.

**Leaderboard** — Edit `src/data/leaderboard.ts`, update `leaderboardData`.

**Blog** — Edit `src/data/blog.ts`, add new post objects with Markdown content.

**Mirrored README files** — `repo-readmes/` stores copies used by the website. When an upstream benchmark README changes, refresh the matching copy here so links and badges do not drift.

## Deployment

Auto-deploys to **GitHub Pages** on push to `main` via `.github/workflows/deploy.yml`.

Manual build:

```bash
npm run build   # generates static site in out/
```

## Contact

- Email: mingzhang23@m.fudan.edu.cn
- WeChat: zanyingluan
- Platform: [llmeval.com](https://llmeval.com/)
