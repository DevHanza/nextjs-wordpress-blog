import Link from "next/link";
import Image from "next/image";

import { Post } from "@/types/post";
import Author from "@/components/blog/Author";

export default function HeroBlogCard({ post }: { post: Post }) {
  console.log(post);

  return (
    <div className="g-container flex flex-col-reverse items-center gap-6 md:flex-row md:gap-12 lg:gap-22">
      <div className="flex flex-1 flex-col">
        <Author />
        <Link
          href={`/`}
          className={"my-6 flex flex-col gap-2 md:mt-8 md:mb-11 md:gap-3"}
        >
          <h3 className="line-clamp-3 overflow-hidden text-2xl leading-snug tracking-tight md:text-3xl lg:text-4xl">
            Underrated Tools for Creators, But Your Mindset Is Powerful Than You
            Think
          </h3>
          <p className="line-clamp-2 overflow-hidden text-base leading-7 text-gray-500 md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>
        </Link>
        <span className="text-sm text-gray-500">
          2 min read {"\u00A0"} - {"\u00A0"} Oct 19, 2020
        </span>
      </div>

      <div className="w-full flex-1">
        <Link href={`/`}>
          <Image
            className="h-75 w-full rounded-lg object-cover md:h-100"
            src={"/thumbnail.jpg"}
            width={600}
            height={400}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
