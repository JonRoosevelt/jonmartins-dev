import type { Metadata } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
});

export const metadata: Metadata = {
  title: "Jon Martins — Senior Software Engineer",
  description:
    "Interactive career globe. Node.js, TypeScript, React, Python. From São Paulo to Lisbon — remote connections, proxies and relocations.",
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
      <body
        className={`${inter.className} ${grotesk.variable} ${spaceMono.variable} bg-darkblue`}
      >
        {children}
      </body>
    </html>
  );
}
