import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import React from "react";
import Section from "../../components/layouts/section";
import marked from "marked";
import matter from "gray-matter";
import styled from "@emotion/styled";

type PostProps = {
  htmlString: string;
  post: {
    title: string;
    description: string;
    coverImage: string;
    date: string;
    author: string;
    content: string;
  };
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

const PostStyle = styled.div({
  h2: {
    fontWeight: "var(--chakra-fontWeights-bold)",
    fontSize: "2em",
  },
  p: {
    display: "block",
    marginBlockStart: "1em",
    marginBlockEnd: "1em",
    marginInlineStart: "0px",
    marginInlineEnd: "0px",
  },
});

const Post = ({ htmlString, post }: PostProps): React.ReactNode => {
  return (
    <Section delay={0.1}>
      <Head>
        <title>{post.title}</title>
        <meta title="description" content={post.description} />
      </Head>
      <PostStyle>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </PostStyle>
    </Section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename: string) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const markdownWithMetaData = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();

  const parsedMarkDown = matter(markdownWithMetaData);
  const htmlString = marked(parsedMarkDown.content);
  return {
    props: {
      htmlString,
      post: parsedMarkDown.data,
    },
  };
};

export default Post;
