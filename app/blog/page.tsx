import { PostType } from "@/types";
import React, { ReactElement } from "react";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "@/app/lib/blog-posts";

const Blog = (): ReactElement => {
  const parsedPosts: PostType[] = blogPosts.map((post) =>
    JSON.parse(post.parsedMarkDown),
  );

  const blogs = parsedPosts.map((post: PostType, index: number) => {
    const path = `/blog/posts/${blogPosts[index].name}`;
    return <BlogCard key={post.content} post={post} path={path} />;
  });

  return (
    <section className="w-full max-w-[736px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{blogs}</div>
    </section>
  );
};

export default Blog;
