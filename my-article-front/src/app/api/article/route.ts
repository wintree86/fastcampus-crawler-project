import { Database,db } from "@/service/firebase";
import { Article } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const database = new Database(db);
    const articles: Article[] = await database.getAllData("article");

    return NextResponse.json({ articles })
  } catch (e) {
    return new NextResponse(null, { status: 500 });
  }
}
