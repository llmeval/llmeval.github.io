import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import { BlogPostContent } from "./content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return { title: "Not Found" };
    return { title: post.title, description: post.excerpt };
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();
  return <BlogPostContent post={post} />;
}
