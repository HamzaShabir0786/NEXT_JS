// dynamic Metadata routing
import { Metadata } from "next";
type props = {
  params: {
    productId: string;
  };
};
export const generateMetadata = ({ params }: props): Metadata => {
  return {
    title: `product ${params.productId}`,
  };
};
export default function PoroductDetails({ params }: props) {
  return <h1> Details about product {params.productId}</h1>;
}
