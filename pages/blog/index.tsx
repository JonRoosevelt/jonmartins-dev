import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import marked from "marked";
import { GetStaticProps } from "next";
import path from "path";
import { ReactElement } from "react";
import { PostProps, PostType } from "../../src/types/blogs";
import Index from "../../src/components/BlogCard";

const Blog = ({ posts, blogPosts }: PostProps & PostType): ReactElement => {
  const parsedPosts = JSON.parse(posts);
  const blogs = parsedPosts.map((post: PostType, index: number) => {
    const path = `blog/${blogPosts[index]}`;
    const postWithPath = { ...post, path };
    return (
      <GridItem key={post.content}>
        <Index {...postWithPath} />
      </GridItem>
    );
  });
  return (
    <SimpleGrid gap={6} columns={[2, null, 2]}>
      {blogs}
    </SimpleGrid>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  let posts: GrayMatterFile<string>[] = [];
  let htmlStringList: string[] = [];
  const blogPosts = fs
    .readdirSync("posts")
    .map((post: string) => "".concat(post.replace(".md", "")))
    .reverse();
  blogPosts.forEach((blogPost: string) => {
    const markdownWithMetaData = fs
      .readFileSync(path.join("posts", blogPost + ".md"))
      .toString();

    const parsedMarkDown = matter(markdownWithMetaData);
    const htmlString = marked(parsedMarkDown.content);
    posts.push(parsedMarkDown);
    htmlStringList.push(htmlString);
  });

  return {
    props: {
      htmlStringList,
      posts: JSON.stringify(posts),
      blogPosts,
    },
  };
};
