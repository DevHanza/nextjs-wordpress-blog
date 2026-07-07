"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, Search as SearchIcon } from "@boxicons/react";

import SearchBarOverlay from "./SearchBarOverlay";
import MobileHeaderOverlay from "./MobileHeaderOverlay";

function Header({}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const pathname = usePathname();

  return (
    <header>
      <div className="g-container flex flex-col justify-between py-6 md:flex-row md:py-8">
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
            <li className={pathname === "/" ? "text-black" : ""}>
              <Link href={"/"} className="content-center">
                Home
              </Link>
            </li>
            <li className={pathname === "/about" ? "text-black" : ""}>
              <Link href={"/about"} className="content-center">
                About
              </Link>
            </li>
            <li className={pathname === "/contact" ? "text-black" : ""}>
              <Link href={"/contact"} className="content-center">
                Contact
              </Link>
            </li>
          </ul>

          <SearchIcon
            size="sm"
            className="cursor-pointer"
            onClick={() => {
              setIsSearching(true);
            }}
          />
        </nav>
      </div>
      <MobileHeaderOverlay
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsSearching={setIsSearching}
      />
      <SearchBarOverlay
        isSearching={isSearching}
        setIsSearching={setIsSearching}
      />
    </header>
  );
}

export default Header;
