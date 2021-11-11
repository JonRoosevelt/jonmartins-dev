export type PostType = {
  content: string;
  data: {
    title: string;
    description: string;
    coverImage: string;
    previewText: string;
    author: string;
    date: string;
    imageDescription: string;
  };
};

export type PostProps = {
  htmlStringList: string[];
  posts: string;
  blogPosts: string[];
  parsedMarkDown: string;
};
