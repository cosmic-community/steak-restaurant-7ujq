import { getMetafieldValue } from '@/lib/cosmic'
import type { Location } from '@/types'

interface LocationCardProps {
  location: Location
}

export default function LocationCard({ location }: LocationCardProps) {
  const { metadata } = location
  const image = metadata?.image
  const hoursLines = metadata?.hours
    ? getMetafieldValue(metadata.hours)
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
    : []
  const accepting = Boolean(metadata?.accepting_reservations)
  const address = getMetafieldValue(metadata?.address)
  const phone = getMetafieldValue(metadata?.phone)
  const email = getMetafieldValue(metadata?.email)
  const reservationUrl = getMetafieldValue(metadata?.reservation_url) || '#'
  const reservationNotes = getMetafieldValue(metadata?.reservation_notes)

  return (
    <div className="bg-charcoal-800 border border-charcoal-700 rounded-lg overflow-hidden flex flex-col">
      {image && (
        <div className="h-64 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1200&h=800&fit=crop&auto=format,compress`}
            alt={location.title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="font-serif text-2xl text-white font-bold mb-4">
          {location.title}
        </h3>

        <div className="space-y-2 text-charcoal-200 text-sm mb-6">
          {address && (
            <p className="flex gap-2">
              <span className="text-ember-400">📍</span>
              <span>{address}</span>
            </p>
          )}
          {phone && (
            <p className="flex gap-2">
              <span className="text-ember-400">📞</span>
              <a href={`tel:${phone}`} className="hover:text-ember-400 transition-colors">
                {phone}
              </a>
            </p>
          )}
          {email && (
            <p className="flex gap-2">
              <span className="text-ember-400">✉️</span>
              <a href={`mailto:${email}`} className="hover:text-ember-400 transition-colors">
                {email}
              </a>
            </p>
          )}
        </div>

        {hoursLines.length > 0 && (
          <div className="mb-6">
            <h4 className="text-gold-400 uppercase tracking-wide text-xs font-semibold mb-2">
              Hours
            </h4>
            <ul className="text-charcoal-200 text-sm space-y-1">
              {hoursLines.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-charcoal-700">
          {accepting ? (
            <div>
              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-6 py-3 bg-ember-600 hover:bg-ember-500 text-white font-semibold rounded-sm transition-colors duration-200"
              >
                Reserve a Table
              </a>
              {reservationNotes && (
                <p className="text-charcoal-400 text-xs mt-3 text-center">
                  {reservationNotes}
                </p>
              )}
            </div>
          ) : (
            <p className="text-charcoal-400 text-sm text-center">
              Reservations currently unavailable. Please call ahead.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}