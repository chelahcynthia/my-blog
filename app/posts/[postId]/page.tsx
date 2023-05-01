import { getPostsData } from "@/lib/posts";
import React from "react";
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

  return <div>page</div>;
}
