import ReviewCard from './ReviewCard'
import type { Review } from '@/types'

interface FeaturedReviewsProps {
  reviews: Review[]
}

export default function FeaturedReviews({ reviews }: FeaturedReviewsProps) {
  if (!reviews || reviews.length === 0) return null

  return (
    <section className="bg-charcoal-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
            Guest Love
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            What They&rsquo;re Saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/reviews"
            className="inline-block px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 font-semibold rounded-sm tracking-wide transition-colors duration-200"
          >
            Read All Reviews
          </a>
        </div>
      </div>
    </section>
  )
}