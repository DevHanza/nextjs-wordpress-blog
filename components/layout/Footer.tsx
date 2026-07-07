"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, TwitterX, Instagram } from "@boxicons/react";

function Footer() {
  return (
    <footer className="mt-12.5 md:mt-25">
      <div className="flex h-75 flex-row">
        <div className="relative h-75 grow basis-1">
          <Image
            src="/gallery-1.jpg"
            alt="A large satellite dish installed on a building's roof, capturing signals from space."
            fill
            className="object-cover"
            loading={"lazy"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative h-75 grow basis-1">
          <Image
            src="/gallery-2.jpg"
            alt="A smartphone resting on a wooden table, displaying a colorful home screen."
            fill
            className="object-cover"
            loading={"lazy"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative h-75 grow basis-1">
          <Image
            src="/gallery-3.jpg"
            alt="A workspace featuring a computer monitor, keyboard, mouse, and speaker on a desk surface."
            fill
            className="object-cover"
            loading={"lazy"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative hidden h-75 grow basis-1 md:block">
          <Image
            src="/gallery-4.jpg"
            alt="A robot featuring a head and body constructed from various electronic components and circuits."
            fill
            className="object-cover"
            loading={"lazy"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="relative hidden h-75 grow basis-1 md:block">
          <Image
            src="/gallery-5.jpg"
            alt="A man wearing a virtual reality headset, engaged in a digital experience."
            fill
            className="object-cover"
            loading={"lazy"}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
      <div className="g-container py-12.5 md:py-25">
        <Link href={"/"}>
          <p className="mb-8 text-center text-xl font-semibold text-black md:text-2xl">
            BLOG
          </p>
        </Link>

        <ul className="mb-11 flex flex-row justify-center gap-8 text-sm text-gray-500 uppercase">
          <li className="text-black">
            <Link href={"/"} className="content-center">
              Home
            </Link>
          </li>

          <li>
            <Link href={"/about"} className="content-center">
              About
            </Link>
          </li>
          <li>
            <Link href={"/contact"} className="content-center">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex justify-center gap-3 text-gray-500">
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
          <a
            href={"https://instagram.com"}
            aria-label="Visit our Instagram page"
          >
            <span className="gray-500 flex h-9 w-9 items-center justify-center rounded-full border border-gray-400">
              <Instagram size="sm" />
            </span>
          </a>
        </div>
      </div>
      <div className="border-t border-t-gray-300 px-5 py-6 text-center text-sm text-gray-500">
        © Copyright 2026 - All Rights Reserved by{" "}
        <a href={"https://github.com/DevHanza"}>DevHanza.</a>
      </div>
    </footer>
  );
}

export default Footer;
