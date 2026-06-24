"use client";

import Author from "@/components/blog/Author";
import { Post } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

function BlogCardMini({ post }: Props) {
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
    <div className="flex flex-col-reverse items-center gap-6 lg:flex-row">
      <div className="flex w-full grow flex-col gap-6">
        <Author name={author.name} photo={author.photo} />
        <Link href={`/p/${post.slug}`} className="flex flex-col gap-2 md:gap-3">
          <h3
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
            className="line-clamp-3 overflow-hidden text-2xl md:text-xl"
          ></h3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
            className="md:text-md line-clamp-2 overflow-hidden text-base leading-7 text-gray-500 lg:hidden"
          ></div>
        </Link>
        <span className="text-sm text-gray-500">
          {post.read_time} min read {"\u00A0"} - {"\u00A0"} {date}
        </span>
      </div>
      <div className="w-full shrink-0 lg:w-auto">
        <Link href={`/p/${post.slug}`}>
          <Image
            className="h-75 w-full rounded-lg object-cover md:h-50 lg:w-50"
            src={thumb}
            width={400}
            height={300}
            alt={thumb_alt}
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogCardMini;
