"use client";
import React, { ReactElement } from "react";
import Menu from "../Menu";
export default function Navbar(): ReactElement {
  return (
    <nav className="text-gray-600 body-font bg-gray-300 mb-6">
      <div className="container max-auto flex justify-end itens-centerp p-3">
        <Menu />
      </div>
    </nav>
  );
}
