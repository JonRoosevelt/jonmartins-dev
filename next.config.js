import remarkFrontmatter from "remark-frontmatter";
import rehypeHighlight from "rehype-highlight";
import withMDX from "@next/mdx";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    domains: ["images.unsplash.com", "i.imgur.com"],
  },
};

const mdxOptions = {
  remarkPlugins: [remarkFrontmatter],
  rehypePlugins: [rehypeHighlight],
};

export default withMDX(mdxOptions)(nextConfig);
