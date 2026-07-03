"use client";

import { useRef, useState } from "react";

import BlogCardVertical from "@/components/blog/BlogCardVertical";
import Pagination from "@/components/ui/Pagination";
import ErrorState from "./ui/ErrorState";
import Skeleton from "@/components/ui/Skeleton";

import { Post } from "@/types/post";

interface Props {
  initialData: {
    posts: Post[];
    totalPages: number;
  };
}

function PostsList({ initialData }: Props) {
  //   const { posts, totalPages } = await getPosts(2, 4);

  const totalPages = initialData.totalPages;

  const [posts, setPosts] = useState(initialData.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  async function loadPage(nextPage: number) {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setLoading(true);

    const res = await fetch(`/api/posts?page=${nextPage}&per_page=${4}`);
    const data = await res.json();

    setPosts(data.posts);
    setCurrentPage(nextPage);
    setLoading(false);
  }

  if (!loading && !posts)
    return (
      <div className="g-container min-h-[60dvh] content-center py-12">
        <ErrorState />
      </div>
    );

  return (
    <div ref={sectionRef} className="scroll-mt-30">
      <div className="flex flex-col gap-4 md:gap-6">
        {loading
          ? [...Array(4)].map((_, i) => (
              <Skeleton
                key={i}
                className="h-25 w-full rounded-lg md:h-62 md:rounded-xl"
              />
            ))
          : posts.map((post) => <BlogCardVertical key={post.id} post={post} />)}
      </div>

      <div className="mt-8 flex justify-center md:mt-22">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          loadPage={loadPage}
        />
      </div>
    </div>
  );
}

export default PostsList;
