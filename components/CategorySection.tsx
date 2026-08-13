import MenuItemCard from './MenuItemCard'
import { getMetafieldValue } from '@/lib/cosmic'
import type { MenuCategory, MenuItem } from '@/types'

interface CategorySectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function CategorySection({
  category,
  items,
}: CategorySectionProps) {
  if (!items || items.length === 0) return null

  const description = getMetafieldValue(category.metadata?.description)

  return (
    <section className="mb-16" id={category.slug}>
      <div className="mb-8 border-b border-charcoal-700 pb-4">
        <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-2">
          {category.title}
        </h2>
        {description && (
          <p className="text-charcoal-300 max-w-2xl">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}