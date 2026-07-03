import Image from "next/image";
import Author from "@/components/blog/Author";

import { getPostBySlug } from "@/lib/wordpress/posts";
import { notFound } from "next/navigation";

import styles from "./single-post.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

async function SinglePostPage({ params }: Props) {
  const { slug } = await params;

  const postData = await getPostBySlug(slug);

  if (!postData || !postData[0] || postData.length === 0) {
    return notFound();
  }

  const post = postData[0];

  //
  // In your page.tsx
  const thumb = post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const thumb_alt = post?._embedded?.["wp:featuredmedia"]?.[0]?.alt_text;

  const author = {
    name: post?._embedded?.author?.[0]?.name || "Unknown Author",
    photo: post?._embedded?.author?.[0]?.avatar_urls?.[48] || "/profile.jpg",
  };

  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <section className="section pt-5 md:pt-12">
        <div className="g-container max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="">
              <Author name={author.name} photo={author.photo} />
            </div>
            <span className="hidden gap-3 text-sm text-gray-500 md:flex">
              <span className="">•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{post.read_time} min read</span>
            </span>
          </div>

          <h1
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
            className="mt-6 line-clamp-10 tracking-tight md:mt-8"
          ></h1>

          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
            className="mt-2 line-clamp-2 max-w-3xl overflow-hidden text-base leading-7 text-gray-500 md:mt-4 md:text-lg"
          ></div>

          <span className="mt-6 flex gap-3 text-sm text-gray-500 md:hidden">
            <span>{date}</span>
            <span>•</span>
            <span>{post.read_time} min read</span>
          </span>

          <Image
            src={thumb}
            className="mt-11 h-75 w-full rounded-2xl object-cover md:mt-12 md:h-100"
            width={900}
            height={400}
            alt={thumb_alt}
          />
        </div>
      </section>

      <section className={styles.content}>
        <div
          className="g-container max-w-3xl"
          dangerouslySetInnerHTML={{
            __html: post.content?.rendered ?? "",
          }}
        ></div>
      </section>
    </>
  );
}

export default SinglePostPage;
