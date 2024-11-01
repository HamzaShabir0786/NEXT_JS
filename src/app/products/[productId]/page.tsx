export default function PoroductDetails({ params,}:{params:{productId:string}}) {
  return <h1> Details about product {params.productId}</h1>;
}
