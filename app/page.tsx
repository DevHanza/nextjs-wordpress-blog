import ErrorState from "@/components/ui/ErrorState";
import HeroBlogCard from "@/components/HeroBlogCard";
import BlogCardMini from "@/components/blog/BlogCardMini";
import PostsList from "@/components/PostsList";

import { getPosts } from "@/lib/wordpress/posts";

export default async function Home() {
  //
  const { posts } = await getPosts(1);
  const { posts: latestPosts, totalPages: lpTotalPages } = await getPosts(1, 4);

  if (!posts)
    return (
      <div className="g-container min-h-[60dvh] content-center py-12">
        <ErrorState />
      </div>
    );

  return (
    <>
      {/*  1  */}
      <section className="section mt-5 md:mt-12">
        <HeroBlogCard post={posts[0]} />
      </section>
      {/*  1 # */}

      {/*  2  */}
      <section className="section">
        <div className="g-container">
          <div className="gap grid gap-x-4 gap-y-12 md:grid-cols-2 lg:gap-x-16">
            {posts.slice(1, 5).map((post) => {
              return <BlogCardMini post={post} key={post.id} />;
            })}
          </div>
        </div>
      </section>
      {/*  2 #  */}

      {/*  3  */}
      <section className="section border-t border-t-gray-200 pt-12 pb-0! md:border-0 md:pt-0">
        <div className="g-container">
          <h2 className="mb-8 text-xl font-semibold md:mb-11 md:text-2xl">
            Latest Posts
          </h2>
          <PostsList
            initialData={{ posts: latestPosts, totalPages: lpTotalPages }}
          />
        </div>
      </section>
      {/*  3 #  */}
    </>
  );
}
