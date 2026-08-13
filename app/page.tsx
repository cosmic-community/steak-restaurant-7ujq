import { getFeaturedMenuItems, getFeaturedReviews, getLocations } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import FeaturedDishes from '@/components/FeaturedDishes'
import FeaturedReviews from '@/components/FeaturedReviews'

export default async function HomePage() {
  const [featuredDishes, featuredReviews, locations] = await Promise.all([
    getFeaturedMenuItems(),
    getFeaturedReviews(3),
    getLocations(),
  ])

  const firstDish = featuredDishes[0]
  const firstLocation = locations[0]
  const heroImage =
    firstDish?.metadata?.image?.imgix_url ||
    firstLocation?.metadata?.image?.imgix_url

  return (
    <>
      <Hero imageUrl={heroImage} />

      <section className="bg-charcoal-950 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
            Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-6">
            Fire, Patience &amp; Craft
          </h2>
          <p className="text-charcoal-200 text-lg leading-relaxed">
            At Ember &amp; Oak, every steak begins weeks before it reaches your
            table &mdash; dry-aged in-house, seasoned simply, and finished over
            an open oak fire. It&rsquo;s an approach rooted in tradition,
            elevated by precision, and served with genuine hospitality.
          </p>
        </div>
      </section>

      <FeaturedDishes dishes={featuredDishes} />
      <FeaturedReviews reviews={featuredReviews} />

      <section className="bg-charcoal-900 py-20 px-6 border-t border-charcoal-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-white font-bold mb-6">
            Reserve Your Table
          </h2>
          <p className="text-charcoal-200 text-lg mb-10 leading-relaxed">
            Find your nearest Ember &amp; Oak location and book your evening
            with us.
          </p>
          <a
            href="/locations"
            className="inline-block px-10 py-4 bg-ember-600 hover:bg-ember-500 text-white font-semibold rounded-sm tracking-wide transition-colors duration-200"
          >
            Find a Location
          </a>
        </div>
      </section>
    </>
  )
}