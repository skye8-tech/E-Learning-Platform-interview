export default function Loading() {
    return (
      <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-40 rounded-lg bg-gray-200 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }
  