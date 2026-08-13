import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from './StarRating'
import type { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const { metadata } = review
  const rating = Number(getMetafieldValue(metadata?.rating)) || 0
  const reviewerName = getMetafieldValue(metadata?.reviewer_name) || 'Anonymous Guest'
  const reviewText = getMetafieldValue(metadata?.review)
  const visitDate = getMetafieldValue(metadata?.visit_date)
  const locationName = metadata?.location?.title

  return (
    <div className="bg-charcoal-800 border border-charcoal-700 rounded-lg p-8 flex flex-col h-full">
      <StarRating rating={rating} />
      {reviewText && (
        <p className="text-charcoal-100 leading-relaxed my-5 flex-1">
          &ldquo;{reviewText}&rdquo;
        </p>
      )}
      <div className="mt-auto pt-4 border-t border-charcoal-700 flex items-center justify-between flex-wrap gap-2">
        <div>
          <p className="text-white font-semibold">{reviewerName}</p>
          {locationName && (
            <p className="text-charcoal-400 text-xs">{locationName}</p>
          )}
        </div>
        {visitDate && (
          <p className="text-charcoal-400 text-xs">{formatDate(visitDate)}</p>
        )}
      </div>
    </div>
  )
}