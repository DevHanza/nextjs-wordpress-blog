"use client";

import Author from "@/components/Author";
import Image from "next/image";
import Link from "next/link";

function BlogCardMini() {
  return (
    <div className="flex flex-col-reverse items-center gap-6 lg:flex-row">
      <div className="flex w-full grow flex-col gap-6">
        <Author />
        <Link href={"#"} className="flex flex-col gap-2 md:gap-3">
          <h3 className="line-clamp-3 overflow-hidden text-2xl md:text-xl">
            Underrated Tools for Creators, But Your Mindset Is Powerful..
          </h3>
          <p className="md:text-md line-clamp-2 overflow-hidden text-base leading-7 text-gray-500 lg:hidden">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </Link>
        <span className="text-sm text-gray-500">
          2 min read {"\u00A0"} - {"\u00A0"} Oct 19, 2020
        </span>
      </div>
      <div className="w-full shrink-0 lg:w-auto">
        <Link href={"/"}>
          <Image
            className="h-75 w-full rounded-lg object-cover md:h-50 lg:w-50"
            src={"/thumbnail.jpg"}
            width={400}
            height={300}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default BlogCardMini;
