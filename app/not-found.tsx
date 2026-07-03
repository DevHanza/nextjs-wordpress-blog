import Link from "next/link";
import Status from "@/components/ui/Status";
import { MessageCircleQuestionMark } from "@boxicons/react";

export default function NotFound() {
  return (
    <div className="g-container min-h-[60dvh] content-center py-12 text-center">
      <Status
        heading="Not Found"
        text="Could not find requested resource"
        Icon={MessageCircleQuestionMark}
        statusColor="text-gray-700"
      />

      <Link href="/">
        <button className="mt-8 min-h-10 cursor-pointer rounded-md bg-black px-4 text-base text-white">
          Return Home
        </button>
      </Link>
    </div>
  );
}
