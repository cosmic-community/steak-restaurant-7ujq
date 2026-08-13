import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export const metadata = {
  title: 'Reviews | Ember & Oak Steakhouse',
  description:
    "See what our guests are saying about their Ember & Oak Steakhouse experience.",
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <div className="bg-charcoal-950 min-h-screen">
      <div className="bg-charcoal-900 py-16 px-6 text-center border-b border-charcoal-800">
        <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
          Guest Reviews
        </p>
        <h1 className="font-serif text-5xl text-white font-bold mb-4">
          What Our Guests Say
        </h1>
        <p className="text-charcoal-300 max-w-2xl mx-auto">
          Real reviews from real guests who&rsquo;ve dined with us.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {reviews.length === 0 ? (
          <p className="text-center text-charcoal-300">
            No reviews yet. Be the first to dine with us!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}