import { NextResponse } from "next/server";
let myData: any[] = [{ name: "Hamza", age: 20, qualification: "Intermediate" }];
export async function GET() {
  return NextResponse.json(myData);
}

export async function POST(req: Request) {
  const data = await req.json();

  const newData = {
    age: myData.length + 1, // Assuming you want to increment the ID based on the array length
    name: data.name,
    qualification: data.qualification,
  };

  myData.push(newData);

  return NextResponse.json(newData, {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
