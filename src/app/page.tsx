// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Link href="/blog">Blog</Link>
      {/* <Link href={"/blog"}>Blog</Link> both are correct method to navigate links */}
      <Link href="/products">Products</Link>
    </div>
  );
}
