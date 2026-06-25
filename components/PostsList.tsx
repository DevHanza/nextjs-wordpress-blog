import BlogCardVertical from "@/components/blog/BlogCardVertical";
import Pagination from "@/components/ui/Pagination";
import EmptyState from "@/components/ui/EmptyState";

import { getPosts } from "@/lib/wordpress/posts";

async function PostsList() {
  const { posts, totalPages } = await getPosts(2, 4);

  if (!posts) return <EmptyState />;

  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        {posts.map((post) => {
          return <BlogCardVertical post={post} key={post.id} />;
        })}
      </div>

      <div className="mt-8 flex justify-center md:mt-22">
        <Pagination />
      </div>
    </div>
  );
}

export default PostsList;
