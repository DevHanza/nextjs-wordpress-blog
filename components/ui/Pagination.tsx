"use client";

import { JSX } from "react/jsx-runtime";
// import { ChevronRight } from "@boxicons/react";

interface Props {
  totalPages: number;
  loadPage: (nextPage: number) => Promise<void>;
  currentPage: number;
}

function Pagination({ totalPages, loadPage, currentPage }: Props) {
  if (totalPages <= 1) return;

  return (
    <div className="flex flex-row gap-0 md:gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((x) => {
        return (
          <span key={x} onClick={() => loadPage(x)}>
            <Pbtn num={x} isActive={currentPage === x} />
          </span>
        );
      })}
      {/* <Pbtn icon={<ChevronRight />} /> */}
    </div>
  );
}

export default Pagination;

//
//
//

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
