import matter from "gray-matter";
import { marked } from "marked";
import fs from "fs";
import path from "path";

export const blogPosts = fs
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
