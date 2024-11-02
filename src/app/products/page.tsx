// we will see Dynamic routes in this folder
// and as well as we will see nested dynamic routes
import Link from "next/link";
export default function ProductList() {
  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>Products List</h1>
      <h2>
        <Link href={"products/1"}>Product 1</Link>
      </h2>
      <h2>
        <Link href={"products/2"}>Product 2</Link>
      </h2>
      <h2>
        <Link href={"products/3"} replace>
          Product 3
        </Link>{" "}
        {/*replace is act as a back button let's see on browser*/}
      </h2>
    </>
  );
}
