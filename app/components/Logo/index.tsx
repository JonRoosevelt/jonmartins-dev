import React from "react";
import CondensedLogo from "./condensed-logo";
import FullLogo from "./full-logo";
import Link from "next/link";

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Link href="/">
      <div className="hidden md:block">
        <FullLogo {...props} />
      </div>
      <div className="md:hidden">
        <CondensedLogo {...props} />
      </div>
    </Link>
  );
}
