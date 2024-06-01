import { PostType } from "@/types";
import React, { ReactElement } from "react";

type BlogCardProps = {
  path: string;
  post: PostType; // Extract the data property from PostType
};

const BlogCard = ({ post, path }: BlogCardProps): ReactElement => {
  return (
    <article key={path} className="group">
      <a href={path}>
        <div className="bg-white dark:bg-gray-900 shadow-xl rounded-md p-4 sm:p-6 overflow-hidden">
          <div className="relative h-0 pb-56.25% bg-gray-100 sm:mt-0 sm:mx-0 sm:mb-6">
            <img
              src={post.data.coverImage}
              alt={post.data.imageDescription}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="space-y-2">
            <p className="text-teal-500 uppercase font-semibold text-xs sm:text-sm tracking-wide">
              Blog
            </p>
            <h2 className="text-gray-700 dark:text-white font-body text-lg sm:text-2xl">
              {post.data.title}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm overflow-hidden line-clamp-3">
              {post.data.previewText}
            </p>
          </div>
          <div className="mt-3 sm:mt-6 flex items-center space-x-4">
            <img
              src="jon.jpeg"
              alt="Author"
              className="w-8 h-8 sm:w-16 sm:h-16 rounded-full"
            />
            <div className="space-y-1 text-xs sm:text-sm">
              <p className="font-semibold">{post.data.author}</p>
              <p className="text-gray-500">{post.data.date}</p>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
