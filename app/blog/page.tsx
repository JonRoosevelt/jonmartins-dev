import { PostType } from "@/types";
import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import path from "path";
import React, { ReactElement } from "react";
import BlogCard from "../components/BlogCard";

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

const blogPosts = fs
  .readdirSync(path.join("app", "blog", "posts"))
  .filter((fileName: string) => path.extname(fileName) !== ".tsx")
  .map((fileName: string) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("app", "blog", "posts", fileName, "page.mdx"))
      .toString();

    const parsedMarkDown = matter(markdownWithMetaData);
    const parsedMDWithoutIsEmpty = parsedMarkDown;
    const htmlString = marked(parsedMarkDown.content);
    const postDate = new Date(parsedMarkDown.data.date).getTime();

    return {
      name: fileName.replace(".mdx", ""),
      parsedMarkDown: JSON.stringify(parsedMDWithoutIsEmpty),
      htmlString,
      date: postDate,
    };
  })
  .sort((a, b) => b.date - a.date);
