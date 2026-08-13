export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-950 px-6 text-center">
      <div>
        <p className="text-ember-500 font-serif text-7xl font-bold mb-4">
          404
        </p>
        <h2 className="font-serif text-3xl text-white font-bold mb-4">
          Page Not Found
        </h2>
        <p className="text-charcoal-300 mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-ember-600 hover:bg-ember-500 text-white font-semibold rounded-sm transition-colors duration-200"
        >
          Return Home
        </a>
      </div>
    </div>
  )
}