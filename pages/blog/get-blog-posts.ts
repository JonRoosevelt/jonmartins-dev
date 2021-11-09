import fs from "fs";

export const GetBlogPosts = () => {
  return fs
    .readdirSync("posts")
    .map((post) => "".concat("blog/", post.replace(".md", "")));
};
