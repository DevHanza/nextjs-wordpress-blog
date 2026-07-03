import { fetchAPI } from "@/lib/wordpress/client";
import { Post } from "@/types/post";

export interface PostsResponse {
  posts: Post[];
  totalPages: number;
  totalPosts?: number;
}

export async function getPosts(
  page = 1,
  per_page = 10,
): Promise<PostsResponse> {
  const res = await fetchAPI(
    `wp/v2/posts?_embed&page=${page}&per_page=${per_page}`,
  );

  const posts: Post[] = await res?.json();
  const totalPages = parseInt(res?.headers.get("x-wp-totalpages") || "0");

  return {
    posts,
    totalPages,
  };
}

export async function searchPosts(
  query: string,
  page = 1,
  per_page = 10,
): Promise<PostsResponse> {
  const q = encodeURIComponent(query);
  const res = await fetchAPI(
    `wp/v2/posts?search=${q}&page=${page}&per_page=${per_page}&_embed`,
  );

  const posts: Post[] = await res?.json();
  const totalPages = parseInt(res?.headers.get("x-wp-totalpages") || "0");
  const totalPosts = parseInt(res?.headers.get("x-wp-total") || "0");

  return {
    posts,
    totalPages,
    totalPosts,
  };
}

export async function getPostBySlug(slug: string): Promise<Post[]> {
  const res = await fetchAPI(`wp/v2/posts?slug=${slug}&_embed`);
  return res?.json();
}
