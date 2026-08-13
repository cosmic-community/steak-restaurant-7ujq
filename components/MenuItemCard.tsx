import { getMetafieldValue } from '@/lib/cosmic'
import DietaryBadges from './DietaryBadges'
import type { MenuItem } from '@/types'

interface MenuItemCardProps {
  item: MenuItem
}

function formatPrice(price: unknown): string {
  const value = getMetafieldValue(price)
  const num = Number(value)
  if (!value || isNaN(num)) return ''
  return `$${num.toFixed(2)}`
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const image = item.metadata?.image
  const price = formatPrice(item.metadata?.price)
  const description = getMetafieldValue(item.metadata?.description)
  const dietary = item.metadata?.dietary_info

  return (
    <div className="group bg-charcoal-800 border border-charcoal-700 rounded-lg overflow-hidden hover:border-ember-600 transition-colors duration-300 flex flex-col">
      {image && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={item.title}
            width={400}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {item.metadata?.chefs_feature && (
            <span className="absolute top-3 right-3 bg-gold-500 text-charcoal-950 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
              Chef&rsquo;s Feature
            </span>
          )}
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-serif text-xl text-white font-semibold">
            {item.title}
          </h3>
          {price && (
            <span className="text-ember-400 font-semibold whitespace-nowrap">
              {price}
            </span>
          )}
        </div>
        {description && (
          <p className="text-charcoal-200 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        {dietary && dietary.length > 0 && <DietaryBadges tags={dietary} />}
      </div>
    </div>
  )
}