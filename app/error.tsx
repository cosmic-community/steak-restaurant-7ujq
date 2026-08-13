'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-950 px-6 text-center">
      <div>
        <h2 className="font-serif text-3xl text-white font-bold mb-4">
          Something went wrong
        </h2>
        <p className="text-charcoal-300 mb-8">
          We&rsquo;re having trouble loading this page. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-ember-600 hover:bg-ember-500 text-white font-semibold rounded-sm transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}