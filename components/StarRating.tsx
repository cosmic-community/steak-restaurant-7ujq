interface StarRatingProps {
  rating: number
  max?: number
}

export default function StarRating({ rating, max = 5 }: StarRatingProps) {
  const stars = Array.from({ length: max }, (_, index) => index < Math.round(rating))

  return (
    <div className="flex gap-1" aria-label={`Rating: ${rating} out of ${max}`}>
      {stars.map((filled, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${filled ? 'text-gold-500' : 'text-charcoal-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  )
}