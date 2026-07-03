import { AlertTriangle } from "@boxicons/react";

function Status({
  heading = "Status",
  text = "This is a status.",
  Icon = AlertTriangle,
  statusColor = "text-red-500",
}) {
  return (
    <div className="text-center">
      <Icon size="2xl" className={`${statusColor} mx-auto h-20 md:h-auto`} />
      <h2 className="mt-6 text-2xl md:text-3xl">{heading}</h2>
      <p className="text-md mt-1">{text}</p>
    </div>
  );
}

export default Status;
