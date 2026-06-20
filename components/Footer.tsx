"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, TwitterX, Instagram } from "@boxicons/react";

function Footer() {
  return (
    <footer className="mt-25">
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
      <div className="container py-12.5 md:py-25">
        <Link href={"/"}>
          <p className="mb-8 text-center text-xl font-semibold md:text-2xl">
            BLOG
          </p>
        </Link>

        <ul className="mb-11 flex flex-row justify-center gap-8 text-sm text-gray-500 uppercase">
          <Link href={"/"} className="content-center">
            <li className="text-black">Home</li>
          </Link>
          <Link href={"/about"} className="content-center">
            <li>About</li>
          </Link>
          <Link href={"/contact"} className="content-center">
            <li>Contact</li>
          </Link>
        </ul>

        <div className="flex justify-center gap-3 text-gray-500">
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
      <div className="border-t border-t-gray-300 px-5 py-6 text-center text-sm text-gray-500">
        © Copyright 2026 - All Rights Reserved by{" "}
        <Link href={"https://github.com/DevHanza"}>DevHanza.</Link>
      </div>
    </footer>
  );
}

export default Footer;
