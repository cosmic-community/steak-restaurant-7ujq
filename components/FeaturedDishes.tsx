import MenuItemCard from './MenuItemCard'
import type { MenuItem } from '@/types'

interface FeaturedDishesProps {
  dishes: MenuItem[]
}

export default function FeaturedDishes({ dishes }: FeaturedDishesProps) {
  if (!dishes || dishes.length === 0) return null

  return (
    <section className="bg-charcoal-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
            Chef&rsquo;s Selection
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold">
            Signature Dishes
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <MenuItemCard key={dish.id} item={dish} />
          ))}
        </div>
      </div>
    </section>
  )
}