"use client";
import Image from "next/image";

function Author() {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="h-6 w-6 rounded-sm md:h-7 md:w-7"
        src={"/profile.png"}
        width={28}
        height={28}
        alt=""
      />
      <span className="line-clamp-1 text-sm">Mary Anthony</span>
    </div>
  );
}

export default Author;
