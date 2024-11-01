// we will learn about nested layout
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Feature Product</h2>
    </>
  );
}
