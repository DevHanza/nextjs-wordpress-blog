"use client";

import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import { Search, X, Facebook, TwitterX, Instagram } from "@boxicons/react";
import styles from "./Header.module.css";

type OverlayProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  setIsSearching: Dispatch<SetStateAction<boolean>>;
};

function MobileHeaderOverlay({
  isMenuOpen,
  setIsMenuOpen,
  setIsSearching,
}: OverlayProps) {
  return (
    <div
      className={` ${styles.overlay} ${isMenuOpen ? styles.open : ""} absolute inset-0 z-99 flex h-dvh flex-col items-center justify-between overflow-hidden overscroll-contain bg-white px-5 py-6`}
    >
      <div className="w-full">
        <label htmlFor="navToggle">
          <X
            className="ml-auto cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        </label>
      </div>
      <nav className="flex flex-col items-center gap-9">
        <ul className="flex flex-col gap-9 text-center text-lg text-gray-500 uppercase">
          <Link href={"/"}>
            <li className="text-black">Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <Search
          className="cursor-pointer"
          size="sm"
          onClick={() => {
            setIsSearching(true);
          }}
        />
      </nav>

      <div className="flex gap-3 text-gray-500">
        <a href={"https://facebook.com"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Facebook size="sm" />
          </span>
        </a>
        <a href={"https://x.com"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <TwitterX size="sm" />
          </span>
        </a>
        <a href={"https://instagram.com"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Instagram size="sm" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default MobileHeaderOverlay;
