import React from "react";
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

export default function MenuDesktop() {
  return (
    <div className="mt-13 mb-6 mx-6 rounded-lg bg-white bg-opacity-10 p-3 text-center items-center xl:w-[992px] md:w-[768px] w-full hidden md:block">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-10">
          <a href="/" className="hover:text-teal-400">
            HOME
          </a>
          <a href="/blog" className="hover:text-teal-400">
            BLOGS
          </a>
          <a href="/art" className="hover:text-teal-400">
            ART
          </a>
        </div>
        <div className="flex space-x-2 [&>*]:text-green-100">
          <a
            href="http://github.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 text-teal-400 hover:text-teal-300 ">
              <IoLogoGithub />
            </button>
          </a>
          <a
            href="http://twitter.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 text-teal-400 hover:text-teal-300">
              <IoLogoTwitter />
            </button>
          </a>
          <a
            href="http://linkedin.com/in/jonathanmartins88"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 text-teal-400 hover:text-teal-300">
              <IoLogoLinkedin />
            </button>
          </a>
          <a
            href="http://instagram.com/jonroosevelt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 text-teal-400 hover:text-teal-300">
              <IoLogoInstagram />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
