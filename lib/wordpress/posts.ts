import { fetchAPI } from "./client";
import { Post } from "@/types/post";

export async function getPosts(page = 1, per_page = 10): Promise<Post[]> {
  return fetchAPI(`wp/v2/posts?_embed&page=${page}&per_page=${per_page}`);
  // _fields=id,slug,title,excerpt
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return fetchAPI(`wp/v2/posts?slug=${slug}&_embed`);
}
