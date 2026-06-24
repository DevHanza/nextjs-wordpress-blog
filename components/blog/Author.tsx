"use client";
import Image from "next/image";

interface Props {
  name: string;
  photo: string;
}

function Author({ name = "Mark Anthony", photo = "/profile.jpg" }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="h-6 w-6 rounded-sm md:h-7 md:w-7"
        src={photo}
        width={28}
        height={28}
        alt=""
      />
      <span className="line-clamp-1 text-sm">{name}</span>
    </div>
  );
}

export default Author;
