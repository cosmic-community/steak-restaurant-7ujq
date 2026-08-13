import { getMenuCategories, getMenuItems } from '@/lib/cosmic'
import CategorySection from '@/components/CategorySection'
import MenuItemCard from '@/components/MenuItemCard'
import type { MenuItem } from '@/types'

export const metadata = {
  title: 'Menu | Ember & Oak Steakhouse',
  description:
    'Explore our full menu of dry-aged steaks, seasonal sides, and handcrafted cocktails.',
}

export default async function MenuPage() {
  const [categories, items] = await Promise.all([
    getMenuCategories(),
    getMenuItems(),
  ])

  const itemsByCategory: Record<string, MenuItem[]> = {}
  const uncategorized: MenuItem[] = []

  items.forEach((item) => {
    const categoryId = item.metadata?.category?.id
    if (categoryId) {
      const existing = itemsByCategory[categoryId]
      if (existing) {
        existing.push(item)
      } else {
        itemsByCategory[categoryId] = [item]
      }
    } else {
      uncategorized.push(item)
    }
  })

  const hasContent = categories.length > 0 || items.length > 0

  return (
    <div className="bg-charcoal-950 min-h-screen">
      <div className="bg-charcoal-900 py-16 px-6 text-center border-b border-charcoal-800">
        <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
          Our Menu
        </p>
        <h1 className="font-serif text-5xl text-white font-bold mb-4">
          Crafted with Fire
        </h1>
        <p className="text-charcoal-300 max-w-2xl mx-auto">
          Every cut is hand-selected, dry-aged in house, and finished over
          live oak fire.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {!hasContent ? (
          <p className="text-center text-charcoal-300">Menu coming soon.</p>
        ) : (
          <>
            {categories.map((category) => {
              const categoryItems = itemsByCategory[category.id]
              if (!categoryItems || categoryItems.length === 0) return null
              return (
                <CategorySection
                  key={category.id}
                  category={category}
                  items={categoryItems}
                />
              )
            })}
            {uncategorized.length > 0 && (
              <section className="mb-16">
                <div className="mb-8 border-b border-charcoal-700 pb-4">
                  <h2 className="font-serif text-3xl md:text-4xl text-white font-bold">
                    More from the Kitchen
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {uncategorized.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}