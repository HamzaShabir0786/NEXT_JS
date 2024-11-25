// we will learn navigation programmatically
"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("placing your order");
    router.push("/");
    // router.back();
    // router.forward();
    // router.refresh();
    // router.replace();
  };
  return (
    <>
      <h2>Order Product</h2>
      <button onClick={handleClick} className="text-white bg-black">
        Please Order
      </button>
      <button>Hello</button>
    </>
  );
}
