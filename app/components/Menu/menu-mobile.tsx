"use client";
import { useRouter } from "next/navigation";
import React, { ReactElement, useState } from "react";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

type MenuItemType = {
  blank: boolean;
  text: string | null;
  href: string;
  icon: any;
};

const MenuListItems: MenuItemType[] = [
  {
    blank: false,
    text: "HOME",
    href: "/",
    icon: null,
  },
  {
    blank: false,
    text: "BLOGS",
    href: "/blog",
    icon: null,
  },
  {
    blank: false,
    text: "ART",
    href: "/art",
    icon: null,
  },
  {
    blank: true,
    text: null,
    href: "http://github.com/jonroosevelt",
    icon: <IoLogoGithub />,
  },
  {
    blank: true,
    text: null,
    href: "http://twitter.com/jonroosevelt",
    icon: <IoLogoTwitter />,
  },
  {
    blank: true,
    text: null,
    href: "http://linkedin.com/in/jonathanmartins88",
    icon: <IoLogoLinkedin />,
  },
  {
    blank: true,
    text: null,
    href: "http://instagram.com/jonroosevelt",
    icon: <IoLogoInstagram />,
  },
];

export default function MenuMobile(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSelectChange = (href: string) => {
    setIsOpen(false);
    router.push(href);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuLeave = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500); // Adjust the delay time as needed (in milliseconds)
  };

  return (
    <div className="relative" onMouseLeave={handleMenuLeave}>
      <button
        className="text-gray-600 body-font bg-gray-300 hover:bg-white hover:bg-opacity-20 text-center float-right rounded w-10 h-10 focus:border-transparent focus:outline-none transition"
        onClick={toggleDropdown}
        // on click outside
      >
        &#9776; {/* ASCII code for hamburger icon */}
      </button>
      {isOpen && (
        <div
          className={`absolute bg-gray-300 p-3 mt-1 right-0 text-right rounded shadow transition-all duration-500`}
          style={{ maxHeight: isOpen ? "auto" : 0 }}
        >
          {MenuListItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-end items-center text-gray-600 body-font p-2 cursor-pointer"
              onClick={() => handleSelectChange(item.href)}
            >
              <button
                className="flex items-center"
                onClick={() => handleSelectChange(item.href)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
