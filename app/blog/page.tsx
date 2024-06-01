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
    return (
      <div key={post.content} className="flex flex-col items-center">
        <div className="w-full">
          <BlogCard post={{ path, ...post }} />
        </div>
      </div>
    );
  });

  return (
    // some tailwind that delays the loading of the component
    <section>
      <div className="py-6 space-y-5 justify-center">{blogs}</div>
    </section>
  );
};

export default Blog;

const blogPosts = fs
  .readdirSync(path.join("app", "blog", "posts"))
  .map((fileName: string) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("app", "blog", "posts", fileName))
      .toString();

    const parsedMarkDown = matter(markdownWithMetaData);
    const { isEmpty, ...parsedMDWithoutIsEmpty } = parsedMarkDown;
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
