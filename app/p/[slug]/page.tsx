import Image from "next/image";
import Author from "@/components/Author";

function SinglePostPage() {
  return (
    <>
      <section className="section pt-5 md:pt-12">
        <div className="g-container max-w-4xl">
          <div className="flex items-center gap-3">
            <div className="">
              <Author />
            </div>
            <span className="hidden gap-3 text-sm text-gray-500 md:flex">
              <span className="">•</span>
              <span>Oct 19, 2020</span>
              <span>•</span>
              <span>2 min read</span>
            </span>
          </div>

          <h1 className="mt-6 line-clamp-10 tracking-tight md:mt-8">
            Underrated Tools for Creators, But Your Mindset Is Powerful Than You
            Think
          </h1>

          <p className="mt-2 line-clamp-2 max-w-3xl overflow-hidden text-base leading-7 text-gray-500 md:mt-4 md:text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </p>

          <span className="mt-6 flex gap-3 text-sm text-gray-500 md:hidden">
            <span>Oct 19, 2020</span>
            <span>•</span>
            <span>2 min read</span>
          </span>

          <Image
            src={"/thumbnail.jpg"}
            className="mt-11 h-75 w-full rounded-2xl object-cover md:mt-12 md:h-100"
            width={900}
            height={400}
            alt=""
          />
        </div>
      </section>

      <section className="">
        <div className="g-container max-w-3xl">
      
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
          <h2>This is a Heading. </h2>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
          <h3>This is a Heading. </h3>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
          <h4>This is a Heading. </h4>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
          <h5>This is a Heading. </h5>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
          <h6>This is a Heading. </h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            ultricies sapien id eros ultrices egestas. Cras et placerat mi,
            auctor volutpat purus. Donec fermentum egestas leo id volutpat.
            Integer sed ex vitae ante tempus finibus eget quis lectus. Vivamus
            eget dolor quis arcu porta malesuada. Quisque id blandit dolor.
            Quisque volutpat lacus at odio sagittis, eget ultricies libero
            rutrum.
          </p>
        </div>
      </section>
    </>
  );
}

export default SinglePostPage;
