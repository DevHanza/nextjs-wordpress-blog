"use client";

import Link from "next/link";
import Image from "next/image";

import Author from "@/components/blog/Author";

function BlogCardVertical() {
  return (
    <div className="flex w-full max-w-260 content-center gap-4 md:gap-12 lg:gap-16">
      <div className="shrink-0 basis-25 md:basis-62 lg:basis-94">
        <Link href={"/"}>
          <Image
            src={"/thumbnail.jpg"}
            alt=""
            height={250}
            width={375}
            className="h-25 w-full rounded-lg object-cover md:h-62 md:rounded-xl"
          />
        </Link>
      </div>
      <div className="flex grow flex-col-reverse justify-center gap-2 md:flex-col md:gap-6">
        <div className="flex items-center gap-3">
          <div className="hidden md:inline-block">
            <Author />
          </div>
          <span className="flex gap-3 text-xs text-gray-500 md:text-sm">
            <span className="hidden md:inline-block">•</span>
            <span>Oct 19, 2020</span>
            <span>•</span>
            <span>2 min read</span>
          </span>
        </div>

        <Link href={"/"} className={"flex flex-col gap-2 md:gap-3"}>
          <h3 className="line-clamp-3 overflow-hidden text-base leading-snug tracking-tight md:text-2xl lg:text-[1.75rem]">
            Underrated Tools for Creators, But Your Mindset Is Powerful Than You
            Think
          </h3>
          <p className="line-clamp-2 hidden overflow-hidden text-base leading-7 text-gray-500 md:block">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default BlogCardVertical;
