import fs from "fs";
import path from "path";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import React from "react";
import { marked } from "marked";
import matter from "gray-matter";
import styled from "@emotion/styled";
import Section from "../../src/components/layouts/Section";
import { PostType } from "../../src/types/blogs";
import { Button, Icon, Link } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type HtmlString = {
  htmlString: string;
};
const PostStyle = styled.div`
  h2 {
    font-weight: var(--chakra-fontWeights-bold);
    font-size: 2em;
  }
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

const Post = ({
  htmlString,
  title,
  description,
}: PostType["data"] & HtmlString): React.ReactNode => {
  return (
    <>
      <Link href="/blog">
        <Button
          variant="ghost"
          colorScheme="teal"
          leftIcon={<Icon as={IoArrowBack} />}
        >
          Back to blogs
        </Button>
      </Link>
      <Section delay={0.1}>
        <Head>
          <title>{title}</title>
          <meta title="description" content={description} />
        </Head>
        <PostStyle>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </PostStyle>
      </Section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((filename: string) => ({
    params: {
      slug: filename.replace(".mdx", ""),
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
    .readFileSync(path.join("posts", slug + ".mdx"))
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
