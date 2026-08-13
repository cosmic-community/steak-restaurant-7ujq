export default function ReviewsLoading() {
  return (
    <div className="bg-charcoal-950 min-h-screen">
      <div className="bg-charcoal-900 py-16 px-6 text-center border-b border-charcoal-800 animate-pulse">
        <div className="h-4 w-32 bg-charcoal-700 mx-auto mb-4 rounded" />
        <div className="h-10 w-72 bg-charcoal-700 mx-auto mb-4 rounded" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-8 animate-pulse space-y-4"
          >
            <div className="h-5 bg-charcoal-700 rounded w-24" />
            <div className="h-4 bg-charcoal-700 rounded w-full" />
            <div className="h-4 bg-charcoal-700 rounded w-5/6" />
            <div className="h-4 bg-charcoal-700 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  )
}