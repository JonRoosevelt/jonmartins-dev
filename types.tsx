export type PostType = {
  content: string;
  slug: string;
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

export type BlogPost = {
  date: number;
  htmlString: string;
  name: string;
  parsedMarkDown: string;
};

export type PostProps = {
  htmlStringList: string[];
  posts: string;
  blogPosts: BlogPost[];
  parsedMarkDown: string;
};
