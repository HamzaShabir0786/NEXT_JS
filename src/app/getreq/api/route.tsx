// import { NextResponse } from "next/server";

// export async function GET(req: Request) {
//   return NextResponse.json({ message: "hello i am here" });
// }
var myData: any[] = [
  { name: "Hamza", age: "20", qualification: "Intermediate" },
];
export async function GET() {
  return Response.json(myData);
}
