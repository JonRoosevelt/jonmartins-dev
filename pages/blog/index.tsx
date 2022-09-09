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
    JSON.parse(post.parsedMarkDown)
  );
  const blogs = parsedPosts.map((post: PostType, index: number) => {
    const path = `blog/${blogPosts[index].name}`;
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
  const blogPosts = fs
    .readdirSync("posts")
    .map((fileName: string) => {
      const markdownWithMetaData = fs
        .readFileSync(path.join("posts", fileName))
        .toString();

      const parsedMarkDown = matter(markdownWithMetaData);
      const htmlString = marked(parsedMarkDown.content);
      const postDate = new Date(parsedMarkDown.data.date).getTime();
      return {
        name: fileName.replace(".md", ""),
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
