import HeroBlogCard from "@/components/HeroBlogCard";
import BlogCardMini from "@/components/blog/BlogCardMini";
import BlogCardVertical from "@/components/blog/BlogCardVertical";
import Pagination from "@/components/ui/Pagination";

import { getPosts } from "@/lib/wordpress/posts";

export default async function Home() {
  const posts = await getPosts();
  // console.log(posts[0]);


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
            <BlogCardMini />
            <BlogCardMini />
            <BlogCardMini />
            <BlogCardMini />
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

          <div className="flex flex-col gap-4 md:gap-6">
            <BlogCardVertical />
            <BlogCardVertical />
            <BlogCardVertical />
            <BlogCardVertical />
          </div>

          <div className="mt-8 flex justify-center md:mt-22">
            <Pagination />
          </div>
        </div>
      </section>
      {/*  3 #  */}
    </>
  );
}
