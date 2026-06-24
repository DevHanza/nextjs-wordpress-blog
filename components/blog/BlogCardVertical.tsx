"use client";

import Link from "next/link";
import Image from "next/image";

import { Post } from "@/types/post";
import Author from "@/components/blog/Author";

interface Props {
  post: Post;
}

function BlogCardVertical({ post }: Props) {
  const thumb = post?._embedded["wp:featuredmedia"][0].source_url;
  const thumb_alt = post?._embedded["wp:featuredmedia"][0].alt_text;

  const author = {
    name: post?._embedded.author[0].name,
    photo: post?._embedded.author[0].avatar_urls["48"],
  };

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex w-full max-w-260 content-center gap-4 md:gap-12 lg:gap-16">
      <div className="shrink-0 basis-25 md:basis-62 lg:basis-94">
        <Link href={`/p/${post.slug}`}>
          <Image
            src={thumb}
            alt={thumb_alt}
            height={250}
            width={375}
            className="h-25 w-full rounded-lg object-cover md:h-62 md:rounded-xl"
          />
        </Link>
      </div>
      <div className="flex grow flex-col-reverse justify-center gap-2 md:flex-col md:gap-6">
        <div className="flex items-center gap-3">
          <div className="hidden md:inline-block">
            <Author name={author.name} photo={author.photo} />
          </div>
          <span className="flex gap-3 text-xs text-gray-500 md:text-sm">
            <span className="hidden md:inline-block">•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{post.read_time} min read</span>
          </span>
        </div>

        <Link
          href={`/p/${post.slug}`}
          className={"flex flex-col gap-2 md:gap-3"}
        >
          <h3
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
            className="line-clamp-3 overflow-hidden text-base leading-snug tracking-tight md:text-2xl lg:text-[1.75rem]"
          ></h3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
            className="hidden overflow-hidden text-gray-500 md:block [&_p]:line-clamp-2 [&_p]:text-base [&_p]:leading-7"
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default BlogCardVertical;
