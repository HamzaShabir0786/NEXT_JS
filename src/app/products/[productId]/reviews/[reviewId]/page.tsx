import NotFound from "@/app/not-found";
import { notFound } from "next/navigation";
export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  if (parseInt(params.reviewId) > 100) {
    notFound();  // here is a logic to apply/call notFound function 
  }
  return (
    <h1>
      {" "}
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
