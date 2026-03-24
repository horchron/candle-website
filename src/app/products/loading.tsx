export default function Loading() {
  return (
    <div className="min-h-screen bg-[#fdf8f2] pt-24">
      {/* Header skeleton */}
      <div className="bg-stone-900 py-16 text-center">
        <div className="mx-auto h-4 w-24 animate-pulse rounded-full bg-stone-700 mb-3" />
        <div className="mx-auto h-8 w-56 animate-pulse rounded-full bg-stone-700 mb-3" />
        <div className="mx-auto h-4 w-72 animate-pulse rounded-full bg-stone-800" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex gap-3 mb-10">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="h-9 w-20 animate-pulse rounded-full bg-stone-200" />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-100 overflow-hidden">
              <div className="aspect-[4/3] animate-pulse bg-stone-100" />
              <div className="p-5 space-y-3">
                <div className="h-3 animate-pulse rounded-full bg-stone-100 w-1/2" />
                <div className="h-4 animate-pulse rounded-full bg-stone-200 w-3/4" />
                <div className="h-3 animate-pulse rounded-full bg-stone-100" />
                <div className="flex gap-2 mt-4">
                  <div className="h-6 w-16 animate-pulse rounded-full bg-stone-100" />
                  <div className="h-6 w-16 animate-pulse rounded-full bg-stone-100" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
