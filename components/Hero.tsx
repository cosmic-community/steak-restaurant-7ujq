interface HeroProps {
  imageUrl?: string
}

export default function Hero({ imageUrl }: HeroProps) {
  const bgImage = imageUrl
    ? `${imageUrl}?w=2400&h=1600&fit=crop&auto=format,compress`
    : undefined

  return (
    <section className="relative flex items-center justify-center min-h-[90vh] overflow-hidden bg-charcoal-950">
      {bgImage && (
        <img
          src={bgImage}
          alt="Signature steak dish"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          width={2400}
          height={1600}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/70 to-charcoal-950/30" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <p className="uppercase tracking-[0.3em] text-ember-400 text-sm font-semibold mb-4">
          Est. Excellence
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-bold mb-6 leading-tight">
          Ember &amp; Oak Steakhouse
        </h1>
        <p className="text-charcoal-100 text-lg md:text-xl mb-10 leading-relaxed">
          Dry-aged steaks, live-fire cooking, and a wine list to match. An
          unforgettable evening starts here.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/menu"
            className="px-8 py-3 bg-ember-600 hover:bg-ember-500 text-white font-semibold rounded-sm tracking-wide transition-colors duration-200"
          >
            View Menu
          </a>
          <a
            href="/locations"
            className="px-8 py-3 border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-charcoal-950 font-semibold rounded-sm tracking-wide transition-colors duration-200"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </section>
  )
}