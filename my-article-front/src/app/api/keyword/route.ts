import { Database, db } from "@/service/firebase";
import { Keyword } from "@/types";
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

export async function GET() {
  try {
    const database = new Database(db);
    const keywords: Keyword[] = await database.getAllData("keywords");

    return NextResponse.json({ keywords })
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}