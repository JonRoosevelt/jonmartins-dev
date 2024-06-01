import fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";
import { GetStaticProps } from "next";
import path from "path";
import React, { ReactElement } from "react";
import { PostProps, PostType } from "../../src/types/blogs";
import BlogCard from "../../src/components/BlogCard";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import Section from "../../src/components/layouts/Section";

const Blog = ({ blogPosts }: PostProps): ReactElement => {
  const parsedPosts: PostType[] = blogPosts.map((post) =>
    JSON.parse(post.parsedMarkDown),
  );

  const blogs = parsedPosts.map((post: PostType, index: number) => {
    const path = `blog/posts/${blogPosts[index].name}`;
    const postWithPath = { ...post, path };
    return (
      <WrapItem key={post.content} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
        <Center w="100%">
          <BlogCard {...postWithPath} />
        </Center>
      </WrapItem>
    );
  });

  return (
    <Section delay={0.3}>
      <Wrap py={6} spacing={5} justify="center">
        {blogs}
      </Wrap>
    </Section>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = () => {
  const blogPosts = fs
    .readdirSync(path.join("pages", "blog", "posts"))
    .map((fileName: string) => {
      const markdownWithMetaData = fs
        .readFileSync(path.join("pages", "blog", "posts", fileName))
        .toString();

      const parsedMarkDown = matter(markdownWithMetaData);
      const htmlString = marked(parsedMarkDown.content);
      const postDate = new Date(parsedMarkDown.data.date).getTime();
      console.log("fileName", fileName);

      return {
        name: fileName.replace(".mdx", ""),
        parsedMarkDown: JSON.stringify(parsedMarkDown),
        htmlString,
        date: postDate,
      };
    })
    .sort((a, b) => b.date - a.date);
  return {
    props: {
      blogPosts,
    },
  };
};
