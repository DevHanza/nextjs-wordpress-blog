import { fetchAPI } from "./client";
import { Post } from "@/types/post";

export async function getPosts(): Promise<Post[]> {
  return fetchAPI("wp/v2/posts?_embed&per_page=10");
  // _fields=id,slug,title,excerpt
}

export async function getPostBySlug(slug: string) {
  return fetchAPI(`wp/v2/posts?slug=${slug}&_embed`);
}
