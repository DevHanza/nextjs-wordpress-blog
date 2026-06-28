import { Search as SearchIcon } from "@boxicons/react";

function SearchInput({ query }: { query?: string }) {
  return (
    <form className="flex flex-row gap-2" action={"/search"}>
      <input
        type="text"
        placeholder="Search posts.."
        className="flex-1 rounded-lg border border-gray-300 px-4 md:px-5"
        name="q"
        defaultValue={query}
      />
      <button
        type="submit"
        className="shrink-0 cursor-pointer rounded-lg bg-black p-3 text-white md:p-4"
      >
        <SearchIcon size="base" />
      </button>
    </form>
  );
}

export default SearchInput;
