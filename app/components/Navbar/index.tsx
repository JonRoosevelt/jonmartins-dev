"use client";
import React, { ReactElement } from "react";
import Menu from "../Menu";
import Glitch from "../Glitch";
import Logo from "../Logo";
import useScreenSize from "@/app/hooks/use-screen-size";
export default function Navbar(): ReactElement {
  const { screens, windowWidth } = useScreenSize();
  const { md } = screens;
  const desktop = (md: number, windowWidth: number) => {
    return windowWidth > md;
  };
  return (
    <nav className="flex flex-col text-gray-600 body-font mb-6">
      <div
        className={`flex flex-col w-full md:justify-center sm:justify-end p-3 md:items-center items-end`}
      >
        <div className="flex flex-col xl:w-[992px] md:w-[768px] w-full h-24">
          <Glitch>
            <Logo className="text-green-500" />
          </Glitch>
        </div>
        <Menu />
      </div>
    </nav>
  );
}
