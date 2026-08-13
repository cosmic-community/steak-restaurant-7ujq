import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export const metadata = {
  title: 'Locations | Ember & Oak Steakhouse',
  description:
    'Find an Ember & Oak Steakhouse near you. View hours, contact info, and reserve a table.',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="bg-charcoal-950 min-h-screen">
      <div className="bg-charcoal-900 py-16 px-6 text-center border-b border-charcoal-800">
        <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-3">
          Visit Us
        </p>
        <h1 className="font-serif text-5xl text-white font-bold mb-4">
          Our Locations
        </h1>
        <p className="text-charcoal-300 max-w-2xl mx-auto">
          Each Ember &amp; Oak location offers the same commitment to
          fire-forward cooking and warm hospitality.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {locations.length === 0 ? (
          <p className="text-center text-charcoal-300">
            Location information coming soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}