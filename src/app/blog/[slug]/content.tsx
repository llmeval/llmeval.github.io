"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import { useLanguage } from "@/lib/i18n";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="my-4 list-disc space-y-1 pl-6 text-muted-foreground">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: parseInline(item) }} />
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  const parseInline = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
      .replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" class="font-medium text-accent hover:text-accent/80" target="_blank" rel="noopener noreferrer">$1</a>'
      )
      .replace(/`(.+?)`/g, '<code class="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">$1</code>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("# ")) {
      flushList();
      elements.push(<h1 key={i} className="mb-6 mt-8 text-3xl font-bold text-foreground first:mt-0">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={i} className="mb-4 mt-8 text-2xl font-semibold text-foreground">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={i} className="mb-3 mt-6 text-xl font-semibold text-foreground">{line.slice(4)}</h3>);
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
    } else {
      flushList();
      elements.push(<p key={i} className="my-4 leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: parseInline(line) }} />);
    }
  }
  flushList();
  return elements;
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const { locale, t } = useLanguage();
  const title = (locale === "zh" && post.titleZh) || post.title;
  const content = (locale === "zh" && post.contentZh) || post.content;

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        {t("blog.back")}
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString(locale === "zh" ? "zh-CN" : "en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>·</span>
            <span>{post.author}</span>
          </div>
          <h1 className="mt-3 text-4xl font-bold text-foreground">{title}</h1>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="border-t border-border pt-8">{renderMarkdown(content)}</div>
      </article>
    </div>
  );
}
