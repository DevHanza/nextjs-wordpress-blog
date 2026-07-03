import { AlertTriangle } from "@boxicons/react";

function EmptyState() {
  return (
    <div className="text-center">
      <AlertTriangle
        size="2xl"
        className="mx-auto h-20 text-red-500 md:h-auto"
      />
      <h1 className="mt-6 text-2xl md:text-3xl">Error!</h1>
      <p className="text-md mt-1">Something went wrong.</p>
    </div>
  );
}

export default EmptyState;
