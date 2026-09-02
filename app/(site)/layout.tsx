import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="m-6">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}
