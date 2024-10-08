import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jon Martins - Artist / Developer / Designer",
  description:
    "A Portfolio/Blog website. React, Next.js, TailwindCSS, Typescript, Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-darkblue`}>
        <div className="m-6">
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
