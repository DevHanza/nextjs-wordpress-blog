import React from "react";

interface Props {
  className?: string;
}

function Skeleton({
  className = "h-25 w-full rounded-lg md:h-62 md:rounded-xl",
}: Props) {
  return (
    <div
      role="status"
      className={`${className} animate-[pulse_1s_cubic-bezier(0.4,0,0.5,1)_infinite] bg-gray-200`}
    ></div>
  );
}

export default Skeleton;
