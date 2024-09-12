import { blogPosts } from "@/app/lib/blog-posts";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const topBlogPosts = blogPosts.slice(0, 3).map((p) => {
    const parsed = JSON.parse(p.parsedMarkDown);
    return {
      slug: p.name,
      title: parsed.data.title,
    };
  });

  return (
    <div className="flex bg-white bg-opacity-20 w-full h-30 justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 my-8 md:w-[736px] sm:w-full justify-between sm:mx-8 gap-4">
        <div className="[&>a]:text-wrap [&>a]:hover:text-green-100">
          <h4 className="text-lg font-bold text-green-100">Home</h4>
          <ul>
            <li className="hover:text-green-100">
              <Link href={"/#sup"}>{`'Sup`}</Link>
            </li>
            <li className="hover:text-green-100">
              <Link href={"/#history"}>{`History`}</Link>
            </li>
            <li className="hover:text-green-100">
              <Link href={"/#stack"}>{`Stack`}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-100">Blogs</h4>
          <ul>
            {topBlogPosts.map(({ slug, title }) => (
              <li className="hover:text-green-100" key={slug}>
                <Link href={`/blog/posts/${slug}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold text-green-100">Art</h4>
          <ul>
            <li>Comming soon...</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
