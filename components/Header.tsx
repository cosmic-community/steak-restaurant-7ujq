'use client'

import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/reviews', label: 'Reviews' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-charcoal-950/95 backdrop-blur border-b border-charcoal-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="font-serif text-2xl text-white font-bold tracking-wide">
            Ember <span className="text-ember-500">&amp;</span> Oak
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-charcoal-100 hover:text-ember-400 uppercase text-sm tracking-wide font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/locations"
              className="px-5 py-2 bg-ember-600 hover:bg-ember-500 text-white text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors duration-200"
            >
              Reserve
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-charcoal-100 hover:text-ember-400 uppercase text-sm tracking-wide font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/locations"
              onClick={() => setIsOpen(false)}
              className="px-5 py-2 bg-ember-600 hover:bg-ember-500 text-white text-sm font-semibold uppercase tracking-wide rounded-sm transition-colors duration-200 text-center"
            >
              Reserve
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}