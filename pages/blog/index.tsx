import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { marked } from "marked";
import { GetStaticProps } from "next";
import path from "path";
import React, { ReactElement } from "react";
import { PostProps, PostType } from "../../src/types/blogs";
import BlogCard from "../../src/components/BlogCard";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import Section from "../../src/components/layouts/Section";

interface Post {
  name: string;
  time: number;
}

const Blog = ({ posts, blogPosts }: PostProps & PostType): ReactElement => {
  const parsedPosts = JSON.parse(posts);
  const blogs = parsedPosts.map((post: PostType, index: number) => {
    const path = `blog/${blogPosts[index]}`;
    const postWithPath = { ...post, path };
    return (
      <WrapItem flexWrap={"wrap"} key={post.content}>
        <Center w={["300px", "350px"]}>
          <BlogCard {...postWithPath} />
        </Center>
      </WrapItem>
    );
  });
  return (
    <Section delay={0.3}>
      <Wrap py={6} spacing={5} columns={[2, 2]}>
        {blogs}
      </Wrap>
    </Section>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  let posts: GrayMatterFile<string>[] = [];
  let htmlStringList: string[] = [];
  const blogPosts = fs
    .readdirSync("posts")
    .map((fileName: string) => ({
      name: fileName.replace(".md", ""),
      time: fs.statSync(`posts/${fileName}`).mtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)
    .map((post: Post) => {
      const markdownWithMetaData = fs
        .readFileSync(path.join("posts", post.name + ".md"))
        .toString();

      const parsedMarkDown = matter(markdownWithMetaData);
      const htmlString = marked(parsedMarkDown.content);
      posts.push(parsedMarkDown);
      htmlStringList.push(htmlString);
      return post.name;
    });

  return {
    props: {
      htmlStringList,
      posts: JSON.stringify(posts),
      blogPosts,
    },
  };
};
