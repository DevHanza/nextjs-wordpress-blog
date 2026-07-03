import Status from "@/components/ui/Status";
import { AlertTriangle } from "@boxicons/react";

function ErrorState() {
  return (
    <Status
      heading="Error"
      text="Something went wrong!"
      Icon={AlertTriangle}
      statusColor="text-gray-700"
    />
  );
}

export default ErrorState;
