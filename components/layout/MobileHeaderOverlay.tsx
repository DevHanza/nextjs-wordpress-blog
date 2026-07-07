"use client";

import type { Dispatch, SetStateAction } from "react";
import Link from "next/link";

import {
  Search as SearchIcon,
  X,
  Facebook,
  TwitterX,
  Instagram,
} from "@boxicons/react";
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
          <li className="text-black">
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <SearchIcon
          className="cursor-pointer"
          size="sm"
          onClick={() => {
            setIsSearching(true);
          }}
        />
      </nav>

      <div className="flex gap-3 text-gray-500">
        <a href={"https://facebook.com"} aria-label="Visit our Facebook page">
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Facebook size="sm" />
          </span>
        </a>
        <a href={"https://x.com"} aria-label="Visit our X (Twitter) page">
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <TwitterX size="sm" />
          </span>
        </a>
        <a href={"https://instagram.com"} aria-label="Visit our Instagram page">
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Instagram size="sm" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default MobileHeaderOverlay;
