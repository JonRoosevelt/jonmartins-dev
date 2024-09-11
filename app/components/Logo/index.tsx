import useScreenSize from "@/app/hooks/use-screen-size";
import React from "react";
import CondensedLogo from "./condensed-logo";
import FullLogo from "./full-logo";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  const { screens, windowWidth } = useScreenSize();
  const { md } = screens;

  return windowWidth > md ? (
    <FullLogo {...props} />
  ) : (
    <CondensedLogo {...props} />
  );
}
