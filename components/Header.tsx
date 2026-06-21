"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Menu,
  Search,
  X,
  Facebook,
  TwitterX,
  Instagram,
} from "@boxicons/react";

import styles from "./Header.module.css";

import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import SearchBarOverlay from "./SearchBarOverlay";

function Header({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const pathname = usePathname();

  return (
    <header>
      <div className="container flex flex-col justify-between py-6 md:flex-row md:py-8">
        <div className="flex flex-row justify-between">
          <Link href={"/"}>
            <span className="text-xl font-semibold md:text-2xl">BLOG</span>
          </Link>

          <Menu
            className="cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        <nav className="hidden flex-row items-center gap-9 md:flex">
          <ul className="flex flex-row gap-8 text-sm text-gray-500 uppercase">
            <Link href={"/"} className="content-center">
              <li className={pathname === "/" ? "text-black" : ""}>Home</li>
            </Link>
            <Link href={"/about"} className="content-center">
              <li className={pathname === "/about" ? "text-black" : ""}>
                About
              </li>
            </Link>
            <Link href={"/contact"} className="content-center">
              <li className={pathname === "/contact" ? "text-black" : ""}>
                Contact
              </li>
            </Link>
          </ul>

          <Search
            size="sm"
            className="cursor-pointer"
            onClick={() => {
              setIsSearching(true);
            }}
          />
        </nav>
      </div>
      <SearchBarOverlay
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
      <MobileHeaderOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsSearching={setIsSearching}
      />
    </header>
  );
}

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
      className={` ${styles.overlay} ${isMenuOpen ? styles.open : ""} absolute inset-0 z-99 flex h-dvh flex-col items-center justify-between bg-white px-5 py-6`}
    >
      <div className="w-full">
        {/* <aside
          className={`${styles.sideMenu} ${open ? styles.open : ""}`}
        ></aside> */}
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
          <Link href={"/"}>
            <li>About</li>
          </Link>
          <Link href={"/"}>
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
        <Link href={"#"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Facebook size="sm" />
          </span>
        </Link>
        <Link href={"#"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <TwitterX size="sm" />
          </span>
        </Link>
        <Link href={"#"}>
          <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
            <Instagram size="sm" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
