export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-800 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div>
          <h3 className="font-serif text-2xl text-white font-bold mb-3">
            Ember <span className="text-ember-500">&amp;</span> Oak
          </h3>
          <p className="text-charcoal-300 text-sm leading-relaxed">
            Dry-aged steaks and live-fire cooking in a warm, upscale setting.
          </p>
        </div>
        <div>
          <h4 className="text-gold-400 uppercase text-xs tracking-wide font-semibold mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/menu" className="text-charcoal-300 hover:text-ember-400 transition-colors">
                Menu
              </a>
            </li>
            <li>
              <a href="/locations" className="text-charcoal-300 hover:text-ember-400 transition-colors">
                Locations
              </a>
            </li>
            <li>
              <a href="/reviews" className="text-charcoal-300 hover:text-ember-400 transition-colors">
                Reviews
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-gold-400 uppercase text-xs tracking-wide font-semibold mb-4">
            Reservations
          </h4>
          <p className="text-charcoal-300 text-sm leading-relaxed">
            Visit our{' '}
            <a href="/locations" className="text-ember-400 hover:underline">
              Locations page
            </a>{' '}
            to book a table at your nearest Ember &amp; Oak.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-8 border-t border-charcoal-800 text-center text-charcoal-500 text-xs">
        &copy; {year} Ember &amp; Oak Steakhouse. All rights reserved.
      </div>
    </footer>
  )
}