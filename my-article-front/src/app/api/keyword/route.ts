import { Database, db } from "@/service/firebase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const database = new Database(db);
    await database.setData("keywords", data.keyword, { ...data });
    return NextResponse.json(data);
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}
