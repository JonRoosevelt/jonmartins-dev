export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return <div style={{ border: "red" }}>{children}</div>;
}
