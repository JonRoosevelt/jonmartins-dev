import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="md:w-full max-w-[736px] md:mx-auto">
      <Link href={"/blog"} className="btn">
        <IoArrowBack />
      </Link>
      <div className="prose dark:prose-invert prose-headings:text-3xl prose-p:text-base max-w-[736px]">
        {children}
      </div>
    </main>
  );
}
