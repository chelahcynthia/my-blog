import { getPostsData, getPostData } from "@/lib/posts";
import React from "react";
import Link from "next/link";
import getFormattedDate from "@/lib/getFormattedDate";
import { notFound } from "next/navigation";

export function generateMetadata({
  params,
}: {
  params: { postId: string };
}) {
  const posts = getPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound;
  }

  const { title, date, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
    <h1 className="text-3xl mt-4 mb-0">{title}</h1>
    <p className="mt-0">
        {pubDate}
    </p>
    <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
            <Link href="/">← Back to home</Link>
        </p>
    </article>
</main>
  );
}
