"use client";

import { BlogPostCard } from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog";
import { useLanguage } from "@/lib/i18n";

export default function BlogPage() {
  const { t } = useLanguage();
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">{t("blog.title")}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{t("blog.desc")}</p>
      </div>

      <div className="space-y-6">
        {sorted.map((post, i) => (
          <BlogPostCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">{t("blog.empty")}</p>
        </div>
      )}
    </div>
  );
}
