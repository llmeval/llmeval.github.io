import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Image src="/images/llmeval-logo.png" alt="LLMEval" width={36} height={36} className="rounded-lg" />
              LLMEval
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Comprehensive evaluation frameworks for large language models by Fudan NLP Lab.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Research</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/papers" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Papers
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Links</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com/llmeval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub Organization
                </a>
              </li>
              <li>
                <a
                  href="http://llmeval.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  LLMEval Platform
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2508.05452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  arXiv (LLMEval-Fair)
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/datasets/HuayuSha/LLMeval-Med"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  HuggingFace (LLMEval-Med)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:mingzhang23@m.fudan.edu.cn"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  mingzhang23@m.fudan.edu.cn
                </a>
              </li>
              <li className="text-sm text-muted-foreground">WeChat: zanyingluan</li>
              <li>
                <span className="text-sm text-muted-foreground">Fudan NLP Lab</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LLMEval Project · Fudan NLP Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
