import { getMetafieldValue } from '@/lib/cosmic'

interface DietaryBadgesProps {
  tags: unknown[]
}

export default function DietaryBadges({ tags }: DietaryBadgesProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        const label = getMetafieldValue(tag)
        if (!label) return null
        return (
          <span
            key={index}
            className="text-xs font-medium uppercase tracking-wide px-2.5 py-1 rounded-full bg-charcoal-700 text-gold-400 border border-charcoal-600"
          >
            {label}
          </span>
        )
      })}
    </div>
  )
}