"use client";

import Author from "@/components/Author";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/*  1  */}
      <section className="mt-5 mb-11 md:mt-12 md:mb-25">
        <div className="container flex flex-col-reverse items-center gap-6 sm:flex-row md:gap-12 lg:gap-22">
          <div className="flex flex-1 flex-col">
            <Author />
            <Link
              href={"/"}
              className={"my-6 flex flex-col gap-2 md:mt-8 md:mb-11 md:gap-3"}
            >
              <h2 className="line-clamp-3 overflow-hidden text-2xl leading-snug sm:text-3xl lg:text-4xl">
                Underrated Tools for Creators, But Your Mindset Is Powerful Than
                You Think
              </h2>
              <p className="line-clamp-2 overflow-hidden text-base leading-7 text-gray-500 md:text-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </Link>
            <span className="text-sm text-gray-500">
              2 min read {"\u00A0"} - {"\u00A0"} Oct 19, 2020
            </span>
          </div>

          <div className="w-full flex-1">
            <Link href={"/"}>
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
      </section>
      {/*  1 # */}
    </>
  );
}
