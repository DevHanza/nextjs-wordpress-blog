import { X, Search } from "@boxicons/react";
import styles from "./SearchBarOverlay.module.css";
import type { Dispatch, SetStateAction } from "react";

type OverlayProps = {
  isSearching: boolean;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

function SearchBarOverlay({ isSearching, setIsSearching }: OverlayProps) {
  return (
    <div
      className={`${styles.overlay} ${isSearching ? styles.open : ""} absolute inset-0 z-100 flex h-dvh flex-col items-center overflow-hidden overscroll-contain bg-white py-6 md:py-8`}
    >
      <div className="g-container">
        <div className="w-full">
          <X
            className="ml-auto cursor-pointer text-gray-500"
            onClick={() => {
              setIsSearching(false);
            }}
          />
        </div>
        <form className="mx-auto mt-15 flex max-w-180 flex-row gap-2 md:mt-22">
          <input
            type="text"
            placeholder="Search posts.."
            className="flex-1 rounded-lg border border-gray-300 px-4 md:px-5"
          />
          <button
            type="submit"
            className="shrink-0 cursor-pointer rounded-lg bg-black p-3 text-white md:p-4"
          >
            <Search size="base" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBarOverlay;
