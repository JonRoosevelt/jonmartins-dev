import React from "react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export default function MenuDesktop() {
  return (
    <div className="mb-6 mx-8 px-6 rounded-lg bg-white bg-opacity-10 p-3 text-center items-center xl:w-[992px] md:w-[768px] w-full hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-10">
          <a href="/" className="hover:underline">
            HOME
          </a>
          <a href="/blog" className="hover:underline">
            BLOGS
          </a>
          <a href="/art" className="hover:underline">
            ART
          </a>
        </div>
        <div className="flex space-x-2 [&>*]:text-green-100">
          <a
            href="http://github.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-green-300/15"
          >
            <button className="p-2">
              <IoLogoGithub />
            </button>
          </a>
          <a
            href="http://twitter.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-green-300/15"
          >
            <button className="p-2">
              <IoLogoTwitter />
            </button>
          </a>
          <a
            href="http://linkedin.com/in/jonathanmartins88"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-green-300/15"
          >
            <button className="p-2">
              <IoLogoLinkedin />
            </button>
          </a>
          <a
            href="http://instagram.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-green-300/15"
          >
            <button className="p-2">
              <IoLogoInstagram />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
