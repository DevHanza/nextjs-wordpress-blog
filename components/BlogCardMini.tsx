"use client";

import Author from "@/components/Author";
import Image from "next/image";
import Link from "next/link";

function BlogCardMini() {
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="flex grow basis-0 flex-col gap-6">
        <Author />
        <h2 className="line-clamp-3 overflow-hidden text-xl">
          Underrated Tools for Creators, But Your Mindset Is Powerful..
        </h2>
        <span className="text-sm text-gray-500">
          2 min read {"\u00A0"} - {"\u00A0"} Oct 19, 2020
        </span>
      </div>
      <div className="basis-40 lg:basis-50">
        <Link href={"/"}>
          <Image
            className="h-50 w-50 rounded-lg object-cover md:w-40 lg:w-50"
            src={"/thumbnail.jpg"}
            width={300}
            height={300}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogCardMini;
