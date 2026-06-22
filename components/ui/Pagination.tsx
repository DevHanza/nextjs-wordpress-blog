"use client";

import { JSX } from "react/jsx-runtime";
import { ChevronRight } from "@boxicons/react";

function Pagination() {
  return (
    <div className="flex flex-row gap-0 md:gap-2">
      <Pbtn num={1} isActive={true} />
      <Pbtn num={2} />
      <Pbtn num={3} />
      <Pbtn num={4} />
      <Pbtn num={5} />
      <Pbtn icon={<ChevronRight />} />
    </div>
  );
}

export default Pagination;

function Pbtn({
  num = 0,
  isActive,
  icon,
}: {
  icon?: JSX.Element;
  num?: number;
  isActive?: boolean;
}) {
  return (
    <span
      className={`${isActive ? "bg-gray-100 text-black" : "text-gray-500"} flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm hover:bg-gray-100`}
    >
      {icon ? icon : num}
    </span>
  );
}
