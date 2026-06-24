import Link from "next/link";
import Image from "next/image";

import { Post } from "@/types/post";
import Author from "@/components/blog/Author";

interface Props {
  post: Post;
}

export default function HeroBlogCard({ post }: Props) {
  // console.log(post?._embedded["wp:featuredmedia"][0].source_url);

  const thumbnail = post?._embedded["wp:featuredmedia"][0].source_url;

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
    <div className="g-container flex flex-col-reverse items-center gap-6 md:flex-row md:gap-12 lg:gap-22">
      <div className="flex flex-1 flex-col">
        <Author name={author.name} photo={author.photo} />
        <Link
          href={`/p/${post.slug}`}
          className={"my-6 flex flex-col gap-2 md:mt-8 md:mb-11 md:gap-3"}
        >
          <h3 className="line-clamp-3 overflow-hidden text-2xl leading-snug tracking-tight md:text-3xl lg:text-4xl">
            {post.title.rendered}
          </h3>
          <div
            className="line-clamp-2 overflow-hidden text-base leading-7 text-gray-500 md:text-lg"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          ></div>
        </Link>
        <span className="text-sm text-gray-500">
          {post.read_time} min read {"\u00A0"} - {"\u00A0"} {date}
        </span>
      </div>

      <div className="w-full flex-1">
        <Link href={`/p/${post.slug}`}>
          <Image
            className="h-75 w-full rounded-lg object-cover md:h-100"
            // src={"/thumbnail.jpg"}
            src={thumbnail}
            width={600}
            height={400}
            alt={post.title.rendered}
            loading="eager"
          />
        </Link>
      </div>
    </div>
  );
}
