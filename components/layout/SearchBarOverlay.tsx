import type { Dispatch, SetStateAction } from "react";
import styles from "./SearchBarOverlay.module.css";
import { X } from "@boxicons/react";
import SearchInput from "@/components/layout/SearchInput";

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
        <div className="mx-auto mt-15 max-w-180 md:mt-22">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default SearchBarOverlay;
