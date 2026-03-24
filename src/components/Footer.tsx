'use client';

import Link from 'next/link';
import { Flame, Heart, Share2, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white">
                Candle<span className="text-amber-500">Guy</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-stone-400">
              Hand-poured with intention. Every candle is crafted using natural soy wax, 
              premium fragrance oils, and cotton wicks — made to fill your space with 
              warmth, calm, and joy.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Follow us"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-amber-700 hover:text-white"
              >
                <Heart className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Share"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-stone-800 text-stone-400 transition-colors hover:bg-amber-700 hover:text-white"
              >
                <Share2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Shop</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: '/products', label: 'All Candles' },
                { href: '/packages', label: 'Bundles & Deals' },
                { href: '/products?category=luxury', label: 'Luxury Collection' },
                { href: '/products?category=seasonal', label: 'Seasonal Scents' },
                { href: '/products?category=gift', label: 'Gifts' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Help</h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: '/about', label: 'Our Story' },
                { href: '/faq', label: 'FAQ' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/shipping', label: 'Shipping Info' },
                { href: '/returns', label: 'Returns Policy' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Get in touch</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:hello@candleguy.com"
                  className="flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-amber-400"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@candleguy.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1800000000"
                  className="flex items-center gap-2 text-sm text-stone-400 transition-colors hover:text-amber-400"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  1-800-CANDLES
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white">Stay in the loop</h4>
              <p className="mt-1 text-xs text-stone-500">New scents, exclusive deals & candle tips.</p>
              <form
                className="mt-3 flex gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-lg border border-stone-700 bg-stone-800 px-3 py-2 text-sm text-white placeholder:text-stone-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 sm:flex-row">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} CandleGuy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-stone-500 transition-colors hover:text-stone-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
