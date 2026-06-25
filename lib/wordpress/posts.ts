import { fetchAPI } from "./client";
import { Post } from "@/types/post";

interface PostsResponse {
  posts: Post[];
  totalPages: number;
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

// export async function getPosts(page = 1, per_page = 10): Promise<Post[]> {
//   const res = await fetchAPI(
//     `wp/v2/posts?_embed&page=${page}&per_page=${per_page}`,
//   );
//   return res?.json();
//   // _fields=id,slug,title,excerpt
// }

export async function getPostBySlug(slug: string): Promise<Post> {
  const res = await fetchAPI(`wp/v2/posts?slug=${slug}&_embed`);
  return res?.json();
}
