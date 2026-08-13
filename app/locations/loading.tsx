export default function LocationsLoading() {
  return (
    <div className="bg-charcoal-950 min-h-screen">
      <div className="bg-charcoal-900 py-16 px-6 text-center border-b border-charcoal-800 animate-pulse">
        <div className="h-4 w-32 bg-charcoal-700 mx-auto mb-4 rounded" />
        <div className="h-10 w-72 bg-charcoal-700 mx-auto mb-4 rounded" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-charcoal-800 border border-charcoal-700 rounded-lg overflow-hidden animate-pulse"
          >
            <div className="h-64 bg-charcoal-700" />
            <div className="p-8 space-y-3">
              <div className="h-6 bg-charcoal-700 rounded w-1/2" />
              <div className="h-4 bg-charcoal-700 rounded w-full" />
              <div className="h-4 bg-charcoal-700 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}