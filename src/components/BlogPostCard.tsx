"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/data/blog";
import { useLanguage } from "@/lib/i18n";

export function BlogPostCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const { locale, t } = useLanguage();
  const title = (locale === "zh" && post.titleZh) || post.title;
  const excerpt = (locale === "zh" && post.excerptZh) || post.excerpt;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
      >
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
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

        <h3 className="mt-2 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
          {t("blog.readMore")}
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
}
