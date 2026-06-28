import { searchPosts } from "@/lib/wordpress/posts";

interface Props {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.q ?? "";

  const { posts, totalPages, totalPosts } = await searchPosts(query, 1, 4);

  return (
    <div className="g-container">
      <div className="py-6 md:py-12">
        <h1 className="text-xl font-normal md:text-2xl">
          {totalPosts} Search Results for{" "}
          <span className="font-bold">“{query}”</span>
        </h1>
      </div>
    </div>
  );
}
