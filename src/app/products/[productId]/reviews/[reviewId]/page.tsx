"use client";
import { notFound } from "next/navigation";
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count); //It's another concept of next js in this file . it's a error handling related concept
}
export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const random = getRandomInt(2);
  if (random == 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 100) {
    notFound(); // here is a logic to apply/call notFound function
  }
  return (
    <h1>
      {" "}
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
