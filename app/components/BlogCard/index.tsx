import { PostType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

type BlogCardProps = {
  path: string;
  post: PostType; // Extract the data property from PostType
};

const BlogCard = ({ post, path }: BlogCardProps): ReactElement => {
  return (
    <article
      key={path}
      className="flex w-30 max-h-100 bg-gray-500 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl"
    >
      <Link href={path}>
        <div>
          <div className="rounded-t-xl">
            <Image
              className="rounded-t-xl w-full object-cover h-60"
              height={480}
              width={720}
              src={post.data.coverImage}
              alt={post.data.imageDescription}
            />
          </div>
          <div className="m-6">
            <div className="flex flex-col gap-1 mb-2">
              <p className="text-sm text-green-500 font-bold">Blog</p>
              <h2 className="text-2xl font-semibold">{post.data.title}</h2>
              {/* add limit of three lines to the preview text */}
              <p className="text-sm text-gray-200 line-clamp-3 text-ellipsis">
                {post.data.previewText}
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                height={100}
                width={100}
                src="/jon.jpeg"
                alt="Author"
                className="w-8 h-8 sm:w-16 sm:h-16 rounded-full object-cover antialiased"
              />
              <div className="space-y-1 text-xs sm:text-sm">
                <p className="font-regular">{post.data.author}</p>
                <p className="font-light text-gray-200">{post.data.date}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
