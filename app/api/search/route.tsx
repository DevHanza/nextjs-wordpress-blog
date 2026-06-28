import { NextRequest, NextResponse } from "next/server";
import { searchPosts } from "@/lib/wordpress/posts";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const query = params.get("q") || "";
  const page = Number(params.get("page") || 1);
  const per_page = Number(params.get("per_page") || 10);

  try {
    //
    const data = await searchPosts(query, page, per_page);
    return NextResponse.json(data);
    //
  } catch {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
