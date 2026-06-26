import { NextResponse } from "next/server";
import { getPosts } from "@/lib/wordpress/posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const per_page = Number(searchParams.get("per_page") || 10);

  const data = await getPosts(page, per_page);

  return NextResponse.json(data);
}
