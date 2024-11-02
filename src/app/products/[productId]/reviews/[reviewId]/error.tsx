"use client";
// npm run build, for this command we will able to know about error but for this task we need to close online server with ctrl + C
// npm run start, and when previous command is executed then run this command error will be shown you.remember it's not best approach. therefore we
// write some line of code here.
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button
        onClick={reset}
        className="border-4 border-blue-700 text-white bg-black"
      >
        {" "}
        Try Again
      </button>{" "}
    </div>
  );
}
