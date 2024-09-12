"use client";

import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const config = resolveConfig(tailwindConfig);

export default function useScreenSize() {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);
  const pixelScreens = config.theme.screens;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window?.innerWidth);
    window?.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const screens = Object.fromEntries(
    Object.entries(pixelScreens).map(([key, value]) => [
      key,
      parseInt(value.replace("px", "")),
    ]),
  );

  return { screens, windowWidth };
}
