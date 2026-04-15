import type { Metadata } from "next";
import { BlogPostCard } from "@/components/BlogPostCard";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Updates, insights, and announcements from the LLMEval team.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-foreground">Blog</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Updates, insights, and announcements from the LLMEval team.
        </p>
      </div>

      <div className="space-y-6">
        {sorted.map((post, i) => (
          <BlogPostCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-lg text-muted-foreground">No blog posts yet. Stay tuned!</p>
        </div>
      )}
    </div>
  );
}
