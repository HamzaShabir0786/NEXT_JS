// we will see nested routing in blog folder
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "My Blog",
};

export default function Blog() {
  return <h1> My Blog page here</h1>;
}
