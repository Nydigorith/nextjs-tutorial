"use client";
function error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <div>{error.message}</div>
      <button onClick={reset}>Try Again</button>
    </>
  );
}

export default error;
